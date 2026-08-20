(()=>{
  const names={bayan:'بيان',byoun:'بيون',byonti:'بيونتي'};
  const world=()=>document.querySelector('.screen.active')?.id||'bayan';
  const msgBox=()=>document.getElementById(world()+'Msg');
  function scrollToResult(){const el=msgBox();if(!el||!el.textContent.trim())return;requestAnimationFrame(()=>setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),60));}
  ['bayanMsg','byounMsg','byontiMsg'].forEach(id=>{const el=document.getElementById(id);if(!el)return;new MutationObserver(scrollToResult).observe(el,{subtree:true,childList:true,characterData:true,attributes:true});});
  document.addEventListener('click',e=>{if(e.target.closest('.tools .tile,.choices .tile,.game,.choice,.btn'))setTimeout(scrollToResult,180);},true);

  function layoutEnvelope(){const env=document.querySelector('#bayanLetter .envelope');if(!env)return;env.style.margin='18px auto 30px';env.style.width='min(560px,94vw)';}
  window.openEnvelope=function(){if(typeof window.gameCleanup==='function')window.gameCleanup();if(typeof window.go==='function')window.go('bayanLetter');requestAnimationFrame(layoutEnvelope);};
  document.addEventListener('DOMContentLoaded',layoutEnvelope);

  window.huntHearts=function(){
    const st=document.getElementById('bayanStage');if(!st)return;
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    st.innerHTML='<div class="gameHud" id="huntHudFixed">❤️ 0 / 7</div><div class="huntHint">المسي القلوب السبعة ❤️</div>';
    let score=0,ended=false;let clockId;const hearts=new Set();
    const removeAll=()=>{hearts.forEach(h=>h.remove());hearts.clear();};
    const popup=()=>{if(ended)return;ended=true;clearInterval(clockId);removeAll();const old=document.querySelector('.lovePopup');if(old)old.remove();const pop=document.createElement('div');pop.className='lovePopup show';pop.innerHTML='<div class="lovePopupBox"><div class="loveBig">❤️</div><div class="loveText">بحبك '+(names[world()]||'بيان')+'</div><div class="loveSub">جمعتِ كل القلوب ❤️</div><button class="btn loveClose" type="button">كملي ❤️</button></div>';document.body.appendChild(pop);pop.querySelector('.loveClose').onclick=()=>pop.remove();if(typeof window.rain==='function')window.rain(['❤️','💗','💖','💕'],50);};
    const update=()=>{const h=document.getElementById('huntHudFixed');if(h)h.textContent='❤️ '+score+' / 7';};
    const spawn=()=>{if(ended||score>=7)return;const h=document.createElement('button');h.type='button';h.className='tapHeart';h.textContent=['❤️','💗','💖'][Math.floor(Math.random()*3)];h.setAttribute('aria-label','قلب');h.style.left=(6+Math.random()*84)+'%';h.style.top=(18+Math.random()*70)+'%';h.onclick=ev=>{ev.preventDefault();ev.stopPropagation();if(ended)return;h.remove();hearts.delete(h);score++;update();if(score>=7)popup();else spawn();};st.appendChild(h);hearts.add(h);};
    for(let i=0;i<4;i++)spawn();
    clockId=setInterval(()=>{if(ended){clearInterval(clockId);return;}while(hearts.size<4)spawn();},700);
    window.gameCleanup=()=>{ended=true;clearInterval(clockId);removeAll();};
  };
  const style=document.createElement('style');style.textContent=`#bayanStage .tapHeart{position:absolute!important;z-index:9999!important;pointer-events:auto!important;touch-action:manipulation!important;display:block!important;opacity:1!important}.lovePopup{position:fixed!important;inset:0!important;z-index:2147483000!important;display:grid!important;place-items:center!important}.lovePopup.show{opacity:1!important;pointer-events:auto!important}.lovePopupBox{position:relative!important;z-index:2147483001!important}#bayanLetter .envelope{position:relative!important;margin-left:auto!important;margin-right:auto!important}#bayanLetter .paper{z-index:20!important}#bayanLetter .flap{z-index:30!important}#bayanLetter .envelope.open .flap{z-index:5!important}#bayanLetter .envelope.open .paper{z-index:40!important;transform:translateY(-155px)!important}`;document.head.appendChild(style);
})();