(()=>{
  window.orbitGame=()=>{
    const st=document.getElementById('byounStage');
    if(!st)return;
    if(typeof clearStage==='function')clearStage(st);
    st.innerHTML=`<div class="msg show">استخدمي السهمين لتدوير الكوكب 🪐</div><div class="orbitWrap"><button class="orbitArrow" id="orbitLeft" type="button">◀️</button><div class="orbitScene"><div class="orbitMoon">🌙</div><div class="planet" id="planet">🪐</div></div><button class="orbitArrow" id="orbitRight" type="button">▶️</button></div>`;
    const p=document.getElementById('planet');
    let angle=0;
    const rotate=(step)=>{angle=(angle+step+360)%360;p.style.transform=`translate(-50%,-50%) rotate(${angle}deg) translateX(90px) rotate(${-angle}deg)`;};
    document.getElementById('orbitLeft').onclick=()=>rotate(-30);
    document.getElementById('orbitRight').onclick=()=>rotate(30);
  };
  const style=document.createElement('style');
  style.textContent=`.orbitWrap{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:280px;direction:ltr}.orbitScene{position:relative;width:min(64vw,290px);height:min(64vw,290px);border-radius:50%;display:flex;align-items:center;justify-content:center}.orbitScene::before{content:"";position:absolute;width:180px;height:180px;border:2px dashed rgba(255,255,255,.35);border-radius:50%}.orbitScene .orbitMoon{position:absolute;z-index:2;font-size:58px;left:50%;top:50%;transform:translate(-50%,-50%)}.orbitScene .planet{position:absolute;left:50%;top:50%;font-size:50px;transform:translate(-50%,-50%) rotate(0deg) translateX(90px) rotate(0deg);transition:transform .3s ease;z-index:3}.orbitArrow{flex:0 0 58px;width:58px;height:58px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:rgba(80,35,90,.8);color:#fff;font-size:25px;line-height:1;cursor:pointer;box-shadow:0 5px 16px rgba(0,0,0,.22);touch-action:manipulation}.orbitArrow:active{transform:scale(.9)}`;
  document.head.appendChild(style);
})();