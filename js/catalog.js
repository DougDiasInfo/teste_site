document.addEventListener('DOMContentLoaded',async()=>{
 const grid=document.getElementById('catalogGrid'),downloads=document.getElementById('downloadGrid'),search=document.getElementById('catalogSearch'),dsearch=document.getElementById('downloadSearch'),filter=document.getElementById('catalogFilter');
 try{
  const data=await fetch('config/catalog.json').then(r=>r.json());
  const render=(items,target)=>{if(!target)return;target.innerHTML=items.length?items.map(s=>`<article class="card-item"><div class="card-header"><span class="card-icon-glow"><i class="fa-solid ${s.icon}"></i></span><span class="tag-counter">${s.tag}</span></div><h3>${s.title}</h3><p>${s.desc}</p>${s.action?`<button class="btn-watch" type="button" onclick="showToast('${s.action}')">${s.action}</button>`:''}</article>`).join(''):'<div class="empty-state">Nenhum item encontrado.</div>'};
 if(grid){const types=[...new Set(data.services.map(x=>x.tag))];types.forEach(t=>{let o=document.createElement('option');o.value=t;o.textContent=t;filter.appendChild(o)});const apply=()=>{let q=(search.value||'').toLocaleLowerCase('pt-BR');render(data.services.filter(s=>(!filter.value||s.tag===filter.value)&&`${s.title} ${s.desc} ${s.tag}`.toLocaleLowerCase('pt-BR').includes(q)),grid)};search.oninput=apply;filter.onchange=apply;apply()}
 if(downloads){const apply=()=>{let q=(dsearch.value||'').toLocaleLowerCase('pt-BR');render(data.downloads.filter(s=>`${s.title} ${s.desc} ${s.tag}`.toLocaleLowerCase('pt-BR').includes(q)),downloads)};dsearch.oninput=apply;apply()}
 }catch(e){console.error(e);[grid,downloads].forEach(g=>g&&(g.innerHTML='<div class="empty-state">Falha ao carregar o catálogo.</div>'))}
});
