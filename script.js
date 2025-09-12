// Rolagem suave para os links do topo
document.querySelectorAll('.top-nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});