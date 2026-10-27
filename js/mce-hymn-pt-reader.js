/* MCE HIN-08 — leitor PT de módulos complementares, sem alterar o Cruzeiro nem o mixer. */
(()=>{'use strict';
const sources={
  'diversoes-do-mestre':'data/mce-diversoes-do-mestre-pt-en.json',
  'santa-missa':'data/mce-santa-missa-pt.json'
};
function node(tag,cls,txt){const el=document.createElement(tag);if(cls)el.className=cls;if(txt!==undefined)el.textContent=txt;return el;}
function decorateSeparator(){const out=node('div','mce-hymn-symbols');out.setAttribute('aria-label','Sol, Lua e Estrela de seis pontas');out.textContent='☼  ☾  ✡';return out;}
function render(root,collection){root.replaceChildren();
 const list=collection.hymns_portuguese;
 if(!Array.isArray(list)||list.length!==10||list.some((h,i)=>h.number!==i+1||!Array.isArray(h.stanzas)))throw Error('Sequência portuguesa inválida');
 root.append(node('p','mce-hymn-notice','Texto em português extraído do PDF fornecido. Marcações de repetição em revisão documental; não representadas por barras.'));
 list.forEach((h,index)=>{
  const article=node('article','mce-hymn-entry');
  article.id=(collection.collection==='div'?'diversoes-':'missa-')+String(h.number).padStart(2,'0');
  article.append(node('h3','',String(h.number).padStart(2,'0')+' · '+h.title));
  if(h.rhythm&&/^(VALSA|MAZURCA|MISTO|MARCHA)$/i.test(h.rhythm))article.append(node('p','mce-hymn-rhythm',h.rhythm));
  if(h.repeat_text_from_pdf)article.append(node('p','mce-hymn-repeat-note','Indicação na fonte: '+h.repeat_text_from_pdf+' · marcação em revisão'));
  for(const stanza of h.stanzas){if(!Array.isArray(stanza.verses)||!stanza.verses.length)continue;
   const block=node('div','mce-hymn-stanza');block.dataset.barStatus='geometry_requires_review';
   for(const verse of stanza.verses)block.append(node('span','mce-hymn-line',verse));article.append(block);
  }
  if(index===list.length-1)article.append(decorateSeparator());
  root.append(article);
 });
 root.append(node('p','mce-hymn-source','Fonte: '+collection.source_pdf+' · '+list.length+' hinos em português. As versões inglesas, quando presentes, ficam reservadas no JSON para módulos próprios.'));
}
async function load(details){const key=details.id,target=details.querySelector('[data-mce-pt-reader]');if(!target||target.dataset.loaded)return;
 target.textContent='Carregando hinário em português…';
 try{const res=await fetch(sources[key],{cache:'no-cache'});if(!res.ok)throw Error('HTTP '+res.status);const data=await res.json();
  if(data.language_default_for_site!=='pt')throw Error('Idioma principal diferente de português');
  render(target,data);target.dataset.loaded='true';
 }catch(err){target.replaceChildren(node('p','mce-hymn-notice','Não foi possível carregar o hinário. Recarregue a página para tentar novamente.'));console.error('[MCE PT Reader]',key,err);}
}
for(const key of Object.keys(sources)){const d=document.getElementById(key);if(d){d.addEventListener('toggle',()=>{if(d.open)load(d)});if(d.open)load(d);}}
})();
