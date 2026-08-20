(()=>{
  const $=id=>document.getElementById(id);
  function showHamza(){
    const candidates=['bayanMsg','byontiMsg','byounMsg'];
    candidates.forEach(id=>{const el=$(id);if(el){el.textContent='';el.classList.remove('show')}});
    const start=document.getElementById('start');
    if(start) start.scrollIntoView({behavior:'smooth',block:'start'});
    let box=document.getElementById('hamzaLovePopup');
    if(!box){
      box=document.createElement('div');box.id='hamzaLovePopup';
      box.innerHTML='<div class="hamzaLoveInner">بحبك بيان بحبك ❤️</div>';
      document.body.appendChild(box);
    }
    box.classList.remove('show');void box.offsetWidth;box.classList.add('show');
    setTimeout(()=>box.classList.remove('show'),6000);
  }
  window.showHamza=showHamza;
  function bind(){const b=document.querySelector('.hamzaChoice');if(b)b.onclick=showHamza}
  const s=document.createElement('style');s.textContent=`#hamzaLovePopup{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:99999;pointer-events:none;opacity:0;transition:opacity .35s ease;background:rgba(20,5,18,.28)}#hamzaLovePopup.show{opacity:1}.hamzaLoveInner{padding:28px 34px;border-radius:28px;background:rgba(255,255,255,.96);box-shadow:0 18px 60px rgba(0,0,0,.25);font-size:clamp(28px,7vw,54px);font-weight:800;text-align:center;color:#b2185b;transform:scale(.75);transition:transform .4s cubic-bezier(.2,.9,.2,1.2)}#hamzaLovePopup.show .hamzaLoveInner{transform:scale(1)}`;document.head.appendChild(s);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
})();
