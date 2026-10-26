(()=>{"use strict";
const allowed=new Set(["auto","portrait","landscape"]),key="ris-responsive-preview-mode";
const viewport=document.querySelector("[data-siyayo-responsive-viewport]");
const toolbar=document.querySelector("[data-siyayo-responsive-toolbar]");
if(!viewport||!toolbar)return;
const buttons=[...toolbar.querySelectorAll("[data-preview]")];
const touchFirst=!!(window.matchMedia&&matchMedia("(hover:none) and (pointer:coarse)").matches);
function apply(mode,persist=true){const next=allowed.has(mode)?mode:"auto",effective=touchFirst?"auto":next;viewport.dataset.preview=effective;
buttons.forEach(b=>{const active=b.dataset.preview===effective;b.classList.toggle("is-active",active);b.setAttribute("aria-pressed",String(active))});
if(persist&&!touchFirst){try{localStorage.setItem(key,effective)}catch(e){}}
window.dispatchEvent(new CustomEvent("ris:responsive-preview-changed",{detail:{mode:effective,requestedMode:next,touchFirst,pedagogicalChange:false,evaluated:false,evidenceProduced:false}}));}
buttons.forEach(b=>b.addEventListener("click",()=>apply(b.dataset.preview)));
let mode="auto";if(!touchFirst){try{mode=localStorage.getItem(key)||"auto"}catch(e){}}apply(mode,false);
window.RISResponsivePreview=Object.freeze({setMode:apply,getMode:()=>viewport.dataset.preview||"auto",modes:Object.freeze([...allowed])});
})();