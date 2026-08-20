(()=>{
  // Final UX fixes: letter always readable, messages auto-scroll into view, heart hunt has a clear named result.
  let huntCleanup=null;

  const scrollToMessage=()=>{
    const el=document.querySelector('.screen.active .msg.show');
    if(el) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),60);
  };
  const originalMsg=window.msg;
  window.msg=function(id,text){
    if(typeof originalMsg==='function') originalMsg(id,text);
    else { const el=document.getElementById(id); if(el){el.innerHTML=text;el.classList.add('show');} }
    scrollToMessage();
  };

  window.huntHearts=function(){
    const st=document.getElementById('bayanStage');
    const out=document.getElementById('bayanMsg');
    if(!st)return;
    if(huntCleanup)huntCleanup();
    st.innerHTML='<div class="gameHud" id="finalHuntHud">❤️ 0 / 7 · ⏱️ 20</div><div class="huntHint">المسي القلوب قبل ما تختفي ❤️</div>';
    let score=0,time=20,ended=false;
    const hearts=new Set();
    let clock=null,spawnTimer=null;
    const update=()=>{const h=document.getElementById('finalHuntHud');if(h)h.textContent=`❤️ ${score} / 7 · ⏱️ ${time}`;};
    const finish=(win)=>{
      if(ended)return;
      ended=true;clearInterval(clock);clearInterval(spawnTimer);
      hearts.forEach(h=>h.remove());hearts.clear();
      if(out){
        out.innerHTML=win
          ? '<div class="bigLoveResult">بحبك بيان ❤️</div><div>🏆 جمعتي كل القلوب!</div>'
          : '⏰ خلص الوقت! جربي مرة ثانية ❤️';
        out.classList.add('show');
      }
      scrollToMessage();
      if(win&&window.rain)window.rain(['❤️','💗','🌹'],40);
    };
    const spawn=()=>{
      if(ended||score>=7)return;
      const h=document.createElement('button');h.type='button';h.className='tapHeart';h.textContent=['❤️','💗','💖'][Math.floor(Math.random()*3)];
      h.style.left=(7+Math.random()*82)+'%';h.style.top=(28+Math.random()*55)+'%';
      h.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();if(ended)return;h.remove();hearts.delete(h);score++;update();if(score>=7)finish(true);else spawn();};
      st.appendChild(h);hearts.add(h);
      setTimeout(()=>{if(!ended&&h.isConnected){h.remove();hearts.delete(h);if(score<7)spawn();}},2600);
    };
    for(let i=0;i<3;i++)spawn();
    clock=setInterval(()=>{if(ended)return;time--;update();if(time<=0)finish(false);},1000);
    spawnTimer=setInterval(()=>{if(!ended&&score<7&&hearts.size<4)spawn();},900);
    huntCleanup=()=>{ended=true;clearInterval(clock);clearInterval(spawnTimer);hearts.forEach(h=>h.remove());hearts.clear();};
  };

  window.openEnvelope=function(){
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    setTimeout(()=>{const e=document.querySelector('#bayanLetter .envelope');if(e)e.classList.add('open');},100);
  };
})();