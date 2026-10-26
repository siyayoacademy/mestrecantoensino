(()=>{'use strict';
const ids=['emblem','ris','forest','master','piano'];
const sel=document.getElementById('fine-art-layer'),reset=document.getElementById('fine-art-perspective-reset'),info=document.getElementById('fine-art-perspective-status');
if(!sel||!reset)return;
const defs={horizontal:{min:-50,max:50,value:0,suffix:'°'},vertical:{min:-50,max:50,value:0,suffix:'°'},focal:{min:450,max:2400,value:1100,suffix:'px'},inout:{min:-45,max:100,value:0,suffix:'%'}};
const storage=new Map(ids.map(id=>[id,Object.fromEntries(Object.entries(defs).map(([k,d])=>[k,d.value]))]));
const fields=Object.fromEntries(Object.keys(defs).map(k=>[k,document.getElementById('fine-art-'+k)]));
function clamp(v,def){return Math.min(def.max,Math.max(def.min,Number.isFinite(v)?v:def.value))}
function update(id){const el=document.getElementById(id);if(!el)return;
const s=storage.get(id);el.style.transform='perspective('+s.focal+'px) rotateY('+s.horizontal+'deg) rotateX('+s.vertical+'deg) scale('+(1+s.inout/100)+')';
}
function show(){const id=sel.value;const s=storage.get(id);for(const [k,input] of Object.entries(fields)){input.value=String(s[k]);document.getElementById('fine-art-'+k+'-value').textContent=s[k]+defs[k].suffix}
info.textContent='Camada selecionada: '+sel.options[sel.selectedIndex].text+' · Transformação visual independente';}
for(const [k,input] of Object.entries(fields)){input.addEventListener('input',()=>{const id=sel.value;const s=storage.get(id);s[k]=clamp(Number(input.value),defs[k]);update(id);show()})}
sel.addEventListener('change',show);
reset.addEventListener('click',()=>{const id=sel.value;storage.set(id,Object.fromEntries(Object.entries(defs).map(([k,d])=>[k,d.value])));update(id);show()});
for(const id of ids)update(id);
show();
window.RISFineArtPerspective=Object.freeze({getParameters:id=>storage.has(id)?{...storage.get(id)}:null,version:'experimental-1c'});
})();