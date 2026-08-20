(()=>{
  // Final delivery fixes: envelope stays inside the title card, heart hunt popup, auto-scroll.
  const names={bayan:'بيان',byoun:'بيون',byonti:'بيونتي'};
  const getWorld=()=>document.querySelector('.screen.active')?.id||'bayan';

  // Put the Bayan envelope and its paper together inside the same visual card.
  function fitEnvelope(){
    const e=document.querySelector('#bayanLetter .envelope');
    const card=e?.closest('.card');
    if(!e||!card)return;
    e.style.width='min(560px,94vw)';
    e.style.margin='18px auto 8px';
    e.style.height='520px';
  }
  window.openEnvelope=function(){
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    requestAnimationFrame(()=>{
      fitEnvelope();
      const e=document.querySelector('#bayanLetter .envelope');
      if(e)e.classList.add('open');
    });
  };

  // Heart hunt: every successful catch ends with a large popup: بحبك <name>.
  window.huntHearts=function(){
    const st=document.getElementById('bayanStage');
    if(!st)return;
    st.innerHTML='<div class="gameHud" id="finalHuntHud">❤️ 0 / 7 · ⏱️ 20</div><div class="huntHint">المسي كل قلب قبل ما يختفي ❤️</div>';
    let score=0,time=20,ended=false;
    const hearts=new Set();
    const world=getWorld();
    const finish=()=>{
      if(ended)return; ended=true; clearInterval(clock); clearInterval(spawnTimer);
      hearts.forEach(h=>h.remove()); hearts.clear();
      const pop=document.createElement('div');
      pop.className='lovePopup';
      pop.innerHTML=`<div class="lovePopupBox"><div class="loveBig">❤️</div><div class="loveText">بحبك ${names[world]||'بيان'}</div><div class="loveSub">هاي الكلمة إلك وحدك ❤️</div><button type="button" class="btn loveClose">كملي المفاجأة ✨</button></div>`;
      document.body.appendChild(pop);
      requestAnimationFrame(()=>pop.classList.add('show'));
      pop.querySelector('.loveClose').onclick=()=>{pop.classList.remove('show');setTimeout(()=>pop.remove(),300)};
      if(typeof window.rain==='function')window.rain(['❤️','💗','💖'],45);
    };
    const update=()=>{const h=document.getElementById('finalHuntHud');if(h)h.textContent=`❤️ ${score} / 7 · ⏱️ ${time}`};
    const spawn=()=>{
      if(ended||score>=7)return;
      const h=document.createElement('button'); h.type='button'; h.className='tapHeart'; h.textContent=['❤️','💗','💖'][Math.floor(Math.random()*3)];
      h.style.left=(7+Math.random()*82)+'%'; h.style.top=(22+Math.random()*66)+'%';
      h.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(ended)return;h.remove();hearts.delete(h);score++;update();if(score>=7)finish();else spawn()},{once:true});
      st.appendChild(h);hearts.add(h);
      setTimeout(()=>{if(!ended&&h.isConnected){h.remove();hearts.delete(h);if(score<7)spawn()}},2200);
    };
    for(let i=0;i<3;i++)spawn();
    const clock=setInterval(()=>{time--;update();if(time<=0&&!ended){ended=true;clearInterval(clock);clearInterval(spawnTimer);hearts.forEach(h=>h.remove());hearts.clear()}},1000);
    const spawnTimer=setInterval(()=>{if(!ended&&score<7&&hearts.size<4)spawn()},850);
  };

  // Any activity result scrolls smoothly to its result box.
  function scrollResult(el){
    if(!el)return;
    setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),80);
  }
  document.addEventListener('click',e=>{
    const target=e.target.closest('.choice,.game,.tile,.premiumBtn');
    if(!target)return;
    setTimeout(()=>{
      const screen=target.closest('.screen');
      const result=screen?.querySelector('.msg.show:not(.hidden), .msg:not(.hidden), #bayanMsg');
      if(result)scrollResult(result);
    },120);
  },true);

  document.addEventListener('DOMContentLoaded',()=>{fitEnvelope()});
})();
