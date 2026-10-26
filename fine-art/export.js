/* MCE-FINEART-20E · native PNG rendering; no third-party dependencies. */
(()=>{'use strict';
const $=id=>document.getElementById(id),stage=$('stage'),download=$('fine-art-download'),share=$('fine-art-share'),status=$('fine-art-export-status');
if(!stage||!download||!share)return;
const layerIds=['emblem','ris','forest','master','piano'];
const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
let busy=false;
const say=s=>{status.textContent=s};
function fitRect(img,w,h,fit){const iw=img.naturalWidth,ih=img.naturalHeight;if(!iw||!ih)throw Error('Imagem sem dimensões válidas');const scale=fit==='cover'?Math.max(w/iw,h/ih):Math.min(w/iw,h/ih);return {x:(w-iw*scale)/2,y:(h-ih*scale)/2,w:iw*scale,h:ih*scale}}
function sourceCanvas(img,w,h,fit){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');const r=fitRect(img,w,h,fit);g.drawImage(img,r.x,r.y,r.w,r.h);return c}
function affineTriangle(g,img,a,b,c,ua,ub,uc){
const d=(ua.x*(ub.y-uc.y)+ub.x*(uc.y-ua.y)+uc.x*(ua.y-ub.y));if(Math.abs(d)<.000001)return;
const xx=(a.x*(ub.y-uc.y)+b.x*(uc.y-ua.y)+c.x*(ua.y-ub.y))/d;
const xy=(a.y*(ub.y-uc.y)+b.y*(uc.y-ua.y)+c.y*(ua.y-ub.y))/d;
const yx=(a.x*(uc.x-ub.x)+b.x*(ua.x-uc.x)+c.x*(ub.x-ua.x))/d;
const yy=(a.y*(uc.x-ub.x)+b.y*(ua.x-uc.x)+c.y*(ub.x-ua.x))/d;
const tx=a.x-xx*ua.x-yx*ua.y,ty=a.y-xy*ua.x-yy*ua.y;
g.save();g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.lineTo(c.x,c.y);g.closePath();g.clip();g.transform(xx,xy,yx,yy,tx,ty);g.drawImage(img,0,0);g.restore();
}
function mesh(g,img,w,h,p){const nx=14,ny=14,cx=w/2,cy=h/2,ry=p.horizontal*Math.PI/180,rx=p.vertical*Math.PI/180,sc=1+p.inout/100,focal=p.focal;const pts=[];
for(let j=0;j<=ny;j++){const row=[];for(let i=0;i<=nx;i++){const x=(i/nx*w-cx)*sc,y=(j/ny*h-cy)*sc;
const x1=x*Math.cos(ry),z1=-x*Math.sin(ry),y1=y*Math.cos(rx)-z1*Math.sin(rx),z2=y*Math.sin(rx)+z1*Math.cos(rx);
const factor=focal/Math.max(40,focal-z2);row.push({x:cx+x1*factor,y:cy+y1*factor});}pts.push(row)}
for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const u=i/nx*w,v=j/ny*h,du=w/nx,dv=h/ny;
affineTriangle(g,img,pts[j][i],pts[j][i+1],pts[j+1][i],{x:u,y:v},{x:u+du,y:v},{x:u,y:v+dv});
affineTriangle(g,img,pts[j+1][i+1],pts[j+1][i],pts[j][i+1],{x:u+du,y:v+dv},{x:u,y:v+dv},{x:u+du,y:v});}
}
function loadImage(img){if(img.complete&&img.naturalWidth)return Promise.resolve(img);
return new Promise((resolve,reject)=>{img.addEventListener('load',()=>resolve(img),{once:true});img.addEventListener('error',()=>reject(Error('Falha ao carregar '+(img.currentSrc||img.src))),{once:true})})}
async function render(){
const format=window.RISFineArtFormat?.getFormat?.()||'landscape';const W=format==='portrait'?1080:1672,H=format==='portrait'?1920:941;
canvas.width=W;canvas.height=H;ctx.clearRect(0,0,W,H);const state=window.getRISFineArtStageState?.();
if(!state)throw Error('Estado do mixer não está acessível; exportação interrompida para preservar fidelidade.');
const bg=state.bg;if(bg?.enabled){ctx.globalAlpha=bg.opacity/100;ctx.fillStyle=bg.color;ctx.fillRect(0,0,W,H);ctx.globalAlpha=1}
for(const id of layerIds){const layer=state[id],el=$(id);if(!layer?.enabled||!el?.src)continue;
await loadImage(el);let p=window.RISFineArtPerspective?.getParameters?.(id);
if(!p)throw Error('Parâmetros de perspectiva indisponíveis para '+id);
const fit=format==='portrait'?'contain':(['forest','master','piano'].includes(id)?'cover':'fill');
const src=sourceCanvas(el,W,H,fit==='fill'?'contain':fit);
// Landscape image layers originally use object-fit:fill. Match by drawing full-frame for native aspect.
if(fit==='fill'){const g=src.getContext('2d');g.clearRect(0,0,W,H);g.drawImage(el,0,0,W,H)}
ctx.save();ctx.globalAlpha=layer.opacity/100;mesh(ctx,src,W,H,p);ctx.restore();}
if(state.caption){ctx.save();ctx.textAlign='center';ctx.fillStyle='#f2d88a';ctx.font='600 '+Math.round(W*.025)+'px Quicksand, sans-serif';ctx.shadowColor='#000';ctx.shadowBlur=10;ctx.fillText(state.caption,W/2,H*.93,W*.94);ctx.restore()}
ctx.save();ctx.strokeStyle='#d7b35a';ctx.lineWidth=Math.max(2,Math.round(W*.002));ctx.strokeRect(ctx.lineWidth/2,ctx.lineWidth/2,W-ctx.lineWidth,H-ctx.lineWidth);ctx.restore();
return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve({blob:b,format,width:W,height:H}):reject(Error('Falha ao converter a composição em PNG')),'image/png'));
}
async function job(kind){if(busy)return;busy=true;download.disabled=true;share.disabled=true;say('Preparando imagem PNG…');
try{const x=await render(),filename='mestre-canto-ensino-ris-'+x.format+'.png',file=new File([x.blob],filename,{type:'image/png'});
if(kind==='share'&&navigator.canShare?.({files:[file]})&&navigator.share){await navigator.share({files:[file],title:'Estúdio Fine Art Mestre Canto Ensino RIS'});say('Imagem entregue ao compartilhamento do dispositivo.');}
else{const url=URL.createObjectURL(x.blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);say(kind==='share'?'Compartilhamento de arquivos indisponível; PNG gerado para download.':'PNG '+x.width+' × '+x.height+' gerado para download.');}
}catch(e){if(e.name==='AbortError')say('Compartilhamento cancelado.');else say('Não foi possível exportar: '+e.message)}
finally{busy=false;download.disabled=false;share.disabled=false}}
download.addEventListener('click',()=>job('download'));share.addEventListener('click',()=>job('share'));
window.RISFineArtExport=Object.freeze({version:'experimental-1d',formats:['landscape','portrait']});
})();