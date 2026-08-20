(()=>{
  window.orbitGame=()=>{
    const st=document.getElementById('byounStage');
    if(!st)return;
    if(typeof clearStage==='function')clearStage(st);
    st.innerHTML=`<div class="msg show">استخدمي السهمين لتدوير الكوكب 🪐</div><div class="orbitWrap"><button class="orbitArrow" id="orbitLeft" aria-label="تدوير لليسار">◀</button><div class="orbitScene"><div class="orbitMoon">🌙</div><div class="planet" id="planet">🪐</div></div><button class="orbitArrow" id="orbitRight" aria-label="تدوير لليمين">▶</button></div>`;
    const p=document.getElementById('planet');
    const left=document.getElementById('orbitLeft');
    const right=document.getElementById('orbitRight');
    let angle=0;
    const rotate=(step)=>{angle=(angle+step)%360;p.style.transform=`translate(-50%,-50%) rotate(${angle}deg) translateX(90px) rotate(${-angle}deg)`;};
    left.onclick=()=>rotate(-30);
    right.onclick=()=>rotate(30);
  };
  const style=document.createElement('style');
  style.textContent=`.orbitWrap{display:flex;align-items:center;justify-content:center;gap:18px;width:100%;min-height:260px;direction:ltr}.orbitScene{position:relative;width:min(62vw,280px);height:min(62vw,280px);border-radius:50%;display:flex;align-items:center;justify-content:center}.orbitScene::before{content:"";position:absolute;width:180px;height:180px;border:2px dashed rgba(255,255,255,.35);border-radius:50%}.orbitScene .orbitMoon{position:absolute;z-index:2;font-size:58px;left:50%;top:50%;transform:translate(-50%,-50%)}.orbitScene .planet{position:absolute;left:50%;top:50%;font-size:50px;transform:translate(-50%,-50%) rotate(0deg) translateX(90px) rotate(0deg);transition:transform .3s ease;z-index:3}.orbitArrow{width:54px;height:54px;border-radius:50%;border:1px solid rgba(255,255,255,.5);background:rgba(255,255,255,.14);color:#fff;font-size:25px;cursor:pointer;box-shadow:0 6px 18px rgba(0,0,0,.15);touch-action:manipulation}.orbitArrow:active{transform:scale(.9)}`;
  document.head.appendChild(style);
})();