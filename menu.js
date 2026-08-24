document.addEventListener('DOMContentLoaded',()=>{
 const path=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.dock-item').forEach(a=>{
   const href=(a.getAttribute('href')||'').split('/').pop();
   a.classList.toggle('active',href===path || (!path&&href==='index.html'));
 });
 const reveal=()=>document.querySelectorAll('.reveal:not(.in-view)').forEach(el=>{
   if(el.getBoundingClientRect().top<innerHeight*.92) el.classList.add('in-view');
 });
 const observer='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in-view')),{threshold:.08}):null;
 document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('in-view'));
 reveal();
 const top=document.createElement('button');top.className='back-top';top.innerHTML='<i class="fa-solid fa-arrow-up"></i>';top.setAttribute('aria-label','Voltar ao topo');document.body.appendChild(top);
 addEventListener('scroll',()=>top.classList.toggle('visible',scrollY>500),{passive:true});
 top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
 const footer=document.createElement('footer');footer.className='site-footer';footer.innerHTML='<span><strong>DM Informática</strong> · Tecnologia que simplifica.</span><span>© <span data-year></span> · Feito para uma experiência melhor.</span>';document.body.appendChild(footer);document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);window.showToast=m=>{toast.textContent=m;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500)};
 document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 // Relógio opcional
 const clock=document.getElementById('time'); if(clock){const tick=()=>clock.textContent=new Intl.DateTimeFormat('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date());tick();setInterval(tick,1000)}
});
