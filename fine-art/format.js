(()=>{'use strict';
const stage=document.getElementById('stage'),land=document.getElementById('fine-art-landscape'),port=document.getElementById('fine-art-portrait');
if(!stage||!land||!port)return;
function setFormat(mode){const next=mode==='portrait'?'portrait':'landscape';stage.dataset.artFormat=next;land.setAttribute('aria-pressed',String(next==='landscape'));port.setAttribute('aria-pressed',String(next==='portrait'));window.dispatchEvent(new CustomEvent('mce:fineart-format-change',{detail:{format:next,exportReady:false}}));}
land.addEventListener('click',()=>setFormat('landscape'));port.addEventListener('click',()=>setFormat('portrait'));setFormat('landscape');
window.RISFineArtFormat=Object.freeze({setFormat,getFormat:()=>stage.dataset.artFormat,exportReady:false});
})();