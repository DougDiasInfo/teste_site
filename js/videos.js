document.addEventListener('DOMContentLoaded',async()=>{
 const $=id=>document.getElementById(id),search=$('buscaVideo'),filter=$('typeFilter'),grid=$('videoGrid'),count=$('contadorVideos'),modal=$('videoModal'),iframe=$('modalIframe'),player=$('modalVideo'),title=$('modalVideoTitle'),badge=$('modalVideoBadge');
 let all=[];
 const norm=s=>(s||'').toString().toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 const embed=url=>{let m=(url||'').match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);return m?`https://www.youtube-nocookie.com/embed/${m[1]}?autoplay=1&rel=0`:url};
 try{all=await fetch('dados/videos.json').then(r=>r.json())}catch(e){grid.innerHTML='<div class="empty-state">Não foi possível carregar a biblioteca.</div>';return}
 [...new Set(all.map(v=>v.tipo||v.categoria).filter(Boolean))].forEach(t=>{let o=document.createElement('option');o.value=t;o.textContent=t;filter.appendChild(o)});
 function render(){
  const q=norm(search.value),type=filter.value;
  const list=all.filter(v=>{let tags=[...(v.palavrasChave||[]),...(v.tags||[])].join(' ');return(!type||(v.tipo||v.categoria)===type)&&(norm(v.titulo+' '+tags).includes(q))});
  count.textContent=`Exibindo ${list.length} de ${all.length} vídeos`;
  grid.innerHTML=list.length?list.map((v,i)=>`<article class="video-card"><div class="video-thumb-wrapper" data-i="${i}"><img src="${v.thumb||'img/showcase/dm.png'}" alt="${v.titulo}" loading="lazy"><div class="play-overlay"><i class="fa-solid fa-circle-play"></i></div></div><div class="video-info"><span class="video-category">${v.tipo||v.categoria||'Geral'}</span><h3>${v.titulo}</h3><div class="tags-container">${(v.palavrasChave||[]).slice(0,3).map(t=>`<span class="tag">#${t}</span>`).join('')}</div><button class="btn-watch" data-i="${i}"><i class="fa-solid fa-play"></i> Assistir</button></div></article>`).join(''):'<div class="empty-state">Nenhum vídeo encontrado.</div>';
  grid.querySelectorAll('[data-i]').forEach(el=>el.onclick=()=>open(list[+el.dataset.i]));
 }
 function open(v){title.textContent=v.titulo;badge.textContent=v.tipo||v.categoria||'Geral';modal.classList.add('active');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';let url=v.link||'';if(/\.mp4($|\?)/i.test(url)){iframe.style.display='none';player.style.display='block';player.src=url;player.play().catch(()=>{})}else{player.style.display='none';player.pause();player.removeAttribute('src');iframe.style.display='block';iframe.src=embed(url)}}
 function close(){modal.classList.remove('active');modal.setAttribute('aria-hidden','true');iframe.src='';player.pause();player.removeAttribute('src');document.body.style.overflow=''}
 search.oninput=render;filter.onchange=render;$('closeModalBtn').onclick=close;modal.onclick=e=>e.target===modal&&close();document.onkeydown=e=>e.key==='Escape'&&close();render();
});
