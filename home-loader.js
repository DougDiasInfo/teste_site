document.addEventListener('DOMContentLoaded',async()=>{
 const articles=document.getElementById('articlesContainer'),services=document.getElementById('servicePreview');
 try{
  const [a,c]=await Promise.all([fetch('config/home-content.json').then(r=>r.json()),fetch('config/catalog.json').then(r=>r.json())]);
  if(services) services.innerHTML=c.services.slice(0,4).map((s,i)=>`<a class="card-item" href="programas.html"><div class="card-header"><span class="card-icon-glow"><i class="fa-solid ${s.icon}"></i></span><span class="tag-counter">${s.tag}</span></div><h3>${s.title}</h3><p>${s.desc}</p></a>`).join('');
  if(articles) articles.innerHTML=(a.articles||[]).map(x=>`<article class="article-card"><div class="article-img-wrapper"><img src="${x.image}" alt="" loading="lazy"></div><div class="article-content"><span class="article-tag">${x.category}</span><span class="article-date">${x.date}</span><h3>${x.title}</h3><p>${x.summary}</p><a class="link-more" href="${x.link}">Saiba mais →</a></div></article>`).join('');
 }catch(e){console.error(e);if(articles)articles.innerHTML='<div class="empty-state">Não foi possível carregar o conteúdo.</div>'}
});