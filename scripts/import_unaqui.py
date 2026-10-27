#!/usr/bin/env python3
"""Import user's UNAQUI public hymn page to audited MCE JSON, without guessing bis marks.
Run in GitHub Actions. Abort without changing output if structure is not as expected.
"""
import json,re,urllib.request,datetime,sys
from pathlib import Path
from bs4 import BeautifulSoup
URL="https://unaqui.wordpress.com/"
OUT=Path("data/cruzeiro-unaqui-import.json")
ua=urllib.request.Request(URL,headers={"User-Agent":"MCE-Hymn-Importer/1.0 (source reconciliation; contact site owner)"})
with urllib.request.urlopen(ua,timeout=45) as r:
    html=r.read().decode("utf-8")
soup=BeautifulSoup(html,"html.parser")
root=next((soup.select_one(c) for c in [".entry-content",".post-content",".wp-block-post-content","article .content","main"]),None)
if root is None: raise SystemExit("NO-GO: text container not identified")
for tag in root.select("script,style,nav,footer,aside,iframe"):tag.decompose()
# Respect paragraph/stanza boundaries; each line break inside a paragraph is a verse.
blocks=[]
for e in root.find_all(["p","h1","h2","h3","h4","pre","div"],recursive=True):
    if e.name=="div" and e.find(["p","h1","h2","h3","h4","pre"]):continue
    if e.find(["p","h1","h2","h3","h4","pre"]):continue
    text=e.get_text("\n",strip=True).replace("\u00a0"," ").strip()
    if text:blocks.append(text)
raw="\n\n".join(blocks)
# The source may put multiple hymns in one paragraph: headings must be split linewise.
lines=[v.strip() for v in raw.splitlines()]
start=next((i for i,l in enumerate(lines) if "O SANTO CRUZEIRO" in l.upper()),0)
lines=lines[start:]
pattern=re.compile(r"^(0?[1-9]|[1-9]\d|1[0-3]\d)\s*[.·\-]\s*(.+)$")
headers=[(i,int(m.group(1)),m.group(2).strip()) for i,l in enumerate(lines) if (m:=pattern.match(l))]
# Leave publication untouched if WordPress layout has changed or extraction is incomplete.
nums=[n for _,n,_ in headers]
if len(headers)<100 or 1 not in nums or 130 not in nums or len(nums)!=len(set(nums)):
    raise SystemExit("NO-GO: bad source structure: heading_count="+str(len(headers))+" head="+str(nums[:8])+" tail="+str(nums[-8:]))
hymns=[]
for h,(pos,num,title) in enumerate(headers):
    end=headers[h+1][0] if h+1<len(headers) else len(lines)
    body=lines[pos+1:end]
    if num==130:
        body=body[:next((i for i,x in enumerate(body) if x.upper().startswith("O SANTO CRUZEIRO UNIVERSAL")),len(body))]
    rhythm=None
    if (m:=re.match(r"^\(?\s*(VALSA|MAZURCA|MISTO|MARCHA)\s*\)?$",body[0],re.I)) if body else None:
        rhythm=m.group(1).upper();body=body[1:]
    # Preserve title annotations such as (tris) but never interpret them as verified bar intervals.
    content=[];stanza=[]
    for l in body:
        if not l or re.fullmatch(r"\*{2,}",l):
            if stanza:content.append(stanza);stanza=[]
            continue
        stanza.append(l)
    if stanza:content.append(stanza)
    hymns.append({"number":num,"title":title,"rhythm":rhythm,"rhythm_source":"UNAQUI explicit" if rhythm else "not_specified","stanzas":[{"verses":v,"repeat_bars":[],"repeat_status":"unverified"} for v in content],"source_url":URL,"editorial_status":"needs_collation","bar_intervals_verified":False})
if not hymns[0]["stanzas"] or len(hymns[0]["stanzas"])<4:
    raise SystemExit("NO-GO: Lua Branca stanzas were not parsed correctly")
numbers=[h["number"] for h in hymns]
out={"schema_version":"1.0","collection":"O Santo Cruzeiro Universal","source_url":URL,"source_kind":"site_owner_nominated","captured_utc":datetime.datetime.now(datetime.timezone.utc).isoformat(),"status":"imported_needs_editorial_review","reader_mode":"continuous_no_index","disclaimer":"Text follows nominated source; incomplete/abbreviated source lines remain as-is; repetition marks are never inferred.","present_numbers":numbers,"missing_numbers":[i for i in range(1,131) if i not in numbers],"hymns":hymns}
OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text(json.dumps(out,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("Imported",len(hymns),"hymns; missing",out["missing_numbers"],"verses",sum(len(st["verses"]) for h in hymns for st in h["stanzas"]))
