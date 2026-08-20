(()=>{
  // Final interaction fixes: robust heart hunt + safe navigation.
  let huntCleanup=null;
  window.huntHearts=function(){
    const st=document.getElementById('bayanStage');
    const out=document.getElementById('bayanMsg');
    if(!st)return;
    if(huntCleanup)huntCleanup();
    st.innerHTML='<div class="gameHud" id="finalHuntHud">❤️ 0 / 7 · ⏱️ 20</div>';
    let score=0,time=20,ended=false;
    const hearts=new Set();
    const finish=(win)=>{
      if(ended)return;
      ended=true;clearInterval(clock);clearInterval(spawnTimer);
      hearts.forEach(h=>h.remove());hearts.clear();
      if(out){out.innerHTML=win?'🏆 فزتي! جمعتي كل القلوب ❤️<br><small>هاي الجولة كانت إلك لحالك</small>':'⏰ خلص الوقت! جربي مرة ثانية، ولسا في قلوب مستنيتك ❤️';out.classList.add('show');}
      if(win&&window.rain)window.rain(['❤️','💗','🌹'],35);
    };
    const update=()=>{const h=document.getElementById('finalHuntHud');if(h)h.textContent=`❤️ ${score} / 7 · ⏱️ ${time}`;};
    const spawn=()=>{
      if(ended||score>=7)return;
      const h=document.createElement('button');
      h.type='button';h.className='tapHeart';h.textContent=['❤️','💗','💖'][Math.floor(Math.random()*3)];
      h.style.left=(8+Math.random()*78)+'%';h.style.top=(25+Math.random()*58)+'%';
      h.onclick=(ev)=>{ev.preventDefault();ev.stopPropagation();if(ended)return;h.remove();hearts.delete(h);score++;update();if(score>=7)finish(true);else spawn();};
      st.appendChild(h);hearts.add(h);
      setTimeout(()=>{if(!ended&&h.isConnected){h.remove();hearts.delete(h);if(score<7)spawn();}},2200);
    };
    for(let i=0;i<3;i++)spawn();
    const clock=setInterval(()=>{if(ended)return;time--;update();if(time<=0)finish(false);},1000);
    const spawnTimer=setInterval(()=>{if(!ended&&score<7&&hearts.size<4)spawn();},900);
    huntCleanup=()=>{ended=true;clearInterval(clock);clearInterval(spawnTimer);hearts.forEach(h=>h.remove());hearts.clear();};
  };
  // Make every inner letter/activity view returnable without losing the selected world.
  window.openEnvelope=function(){
    if(window.gameCleanup)window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    setTimeout(()=>{const e=document.querySelector('.envelope');if(e&&!e.classList.contains('open'))e.classList.add('open');},120);
  };
})();