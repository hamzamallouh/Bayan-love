(()=>{
  const names={bayan:'بيان',byoun:'بيون',byonti:'بيونتي'};
  const world=()=>document.querySelector('.screen.active')?.id||'bayan';
  const msgBox=()=>document.getElementById(world()+'Msg');

  // Always bring the result box into view after an activity produces a result.
  function scrollToResult(){const el=msgBox();if(!el||!el.textContent.trim())return;setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'}),80)}
  ['bayanMsg','byounMsg','byontiMsg'].forEach(id=>{const el=document.getElementById(id);if(el)new MutationObserver(scrollToResult).observe(el,{subtree:true,childList:true,characterData:true,attributes:true});});
  document.addEventListener('click',e=>{if(e.target.closest('.tools .tile,.choices .tile,.game,.choice,.btn'))setTimeout(scrollToResult,180)},true);

  // Prevent duplicate dynamically-added activity buttons.
  const originalAdd=window.addWorldTools;
  if(originalAdd){window.addWorldTools=function(stageId,items){const host=document.getElementById(stageId)?.parentElement?.querySelector('.tools');if(host){const seen=new Set([...host.querySelectorAll('.dynamicTool')].map(x=>x.dataset.key));items=items.filter(([label])=>!seen.has(label));}originalAdd(stageId,items);if(host)host.querySelectorAll('.tile').forEach(b=>{if(!b.classList.contains('dynamicTool')){const key=b.textContent.trim();if(items.some(x=>x[0]===key)){b.classList.add('dynamicTool');b.dataset.key=key}}})}}

  // Replace the old bouquet with a real selection game. Selected flowers are exactly the flowers that rain.
  window.bouquetGame=function(){
    const st=document.getElementById('bayanStage');if(!st)return;
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    st.innerHTML='<div class="gameHud">🌷 اختاري 3 ورود للباقة</div><div class="bouquetChoices"></div><div class="bouquetPreview" id="bouquetPreview">الباقة: فارغة</div>';
    const box=st.querySelector('.bouquetChoices'), preview=st.querySelector('#bouquetPreview');
    const flowers=['🌹','🌷','🌸','🌺','🌻','💐'];let selected=[];
    flowers.forEach(f=>{const b=document.createElement('button');b.type='button';b.className='bouquetFlower';b.textContent=f;b.dataset.flower=f;b.onclick=()=>{if(selected.includes(f)){selected=selected.filter(x=>x!==f);b.classList.remove('selected')}else if(selected.length<3){selected.push(f);b.classList.add('selected')}preview.textContent=selected.length?'الباقة: '+selected.join(' '):'الباقة: فارغة';if(selected.length===3){msg('bayanMsg','هاي الباقة اللي اخترتيها إلك يا بيان 🌷❤️');rain(selected,42)}};box.appendChild(b)});
  };

  // Keep the envelope and its paper as one moving object, while ensuring the letter is readable.
  function prepareLetter(){
    const env=document.querySelector('#bayanLetter .envelope');if(!env)return;
    env.style.width='min(560px,94vw)';env.style.margin='18px auto 30px';
    const paper=env.querySelector('.paper');if(!paper)return;
    const raw='صَبَاحُ الخَيْرِ لِوَجْهِكِ الذِي أَقْبَلَ فَأَنَارَ\nوَلِعَيْنَيْكِ اللَّتَيْنِ تَخْتَصِرَانِ النَّهَار\n\nأَشْرَقَتِ الشّمْسُ فَطَابَ الوُجُودُ وَاسْتَدَار\nوَأَقْبَلتِ فِي قَلْبِي فَتَوَهَجَ العِشْقُ وَاسْتَنَار\n\nيَبْدَأُ عُمْرِي حِينَمَا يَلُوحُ طَيْفُكِ\nوَيَسْتَقِيمُ نَبْضِي إِذْ يَزُورُنِي حُسْنُكِ الفَرِيد\n\nفَمَا الصّبَاحُ فِي عُرْفِي إِلا لَمْحَةً مِنْ خَيَالِكِ\nوَمَا الضِّيَاءُ فِي كَوْنِي إِلا خُطْوَةً فِي دَلَالِكِ ... صَبَاحِي أَنْتِ ❤️';
    paper.textContent='';raw.split('\n').forEach(line=>{const s=document.createElement('span');s.className='letterLine';s.textContent=line||'\u00a0';paper.appendChild(s)});
    requestAnimationFrame(()=>fitLines(paper));
  }
  function fitLines(paper){const lines=[...paper.querySelectorAll('.letterLine')];let base=parseFloat(getComputedStyle(paper).fontSize)||16;lines.forEach(s=>{s.style.fontSize=base+'px';while(s.scrollWidth>s.clientWidth&&parseFloat(s.style.fontSize)>9)s.style.fontSize=(parseFloat(s.style.fontSize)-.4)+'px'})}
  window.openEnvelope=function(){if(typeof window.gameCleanup==='function')window.gameCleanup();if(typeof window.go==='function')window.go('bayanLetter');requestAnimationFrame(()=>{prepareLetter();const env=document.querySelector('#bayanLetter .envelope');if(env)env.classList.add('open')})};
  document.addEventListener('DOMContentLoaded',prepareLetter);

  // Reliable heart hunt with a large popup after 7 catches.
  window.huntHearts=function(){
    const st=document.getElementById('bayanStage');if(!st)return;if(typeof window.gameCleanup==='function')window.gameCleanup();
    st.innerHTML='<div class="gameHud" id="huntHudFixed">❤️ 0 / 7</div><div class="huntHint">المسي القلوب السبعة ❤️</div>';
    let score=0,ended=false;let clockId;const hearts=new Set();
    const cleanup=()=>{ended=true;clearInterval(clockId);hearts.forEach(h=>h.remove());hearts.clear()};
    const popup=()=>{if(ended)return;ended=true;clearInterval(clockId);hearts.forEach(h=>h.remove());hearts.clear();const pop=document.createElement('div');pop.className='lovePopup show';pop.innerHTML='<div class="lovePopupBox"><div class="loveBig">❤️</div><div class="loveText">بحبك '+(names[world()]||'بيان')+'</div><div class="loveSub">جمعتِ كل القلوب ❤️</div><button class="btn loveClose" type="button">كملي ❤️</button></div>';document.body.appendChild(pop);pop.querySelector('.loveClose').onclick=()=>pop.remove();if(typeof window.rain==='function')window.rain(['❤️','💗','💖','💕'],50)};
    const update=()=>{const h=document.getElementById('huntHudFixed');if(h)h.textContent='❤️ '+score+' / 7'};
    const spawn=()=>{if(ended||score>=7)return;const h=document.createElement('button');h.type='button';h.className='tapHeart';h.textContent=['❤️','💗','💖'][Math.floor(Math.random()*3)];h.style.left=(6+Math.random()*84)+'%';h.style.top=(18+Math.random()*70)+'%';h.onclick=e=>{e.preventDefault();e.stopPropagation();if(ended)return;h.remove();hearts.delete(h);score++;update();if(score>=7)popup()};st.appendChild(h);hearts.add(h)};
    for(let i=0;i<4;i++)spawn();clockId=setInterval(()=>{if(ended)return;while(hearts.size<4)spawn()},700);window.gameCleanup=cleanup;
  };

  const style=document.createElement('style');style.textContent=`.dynamicTool{display:inline-block}.bouquetChoices{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin:70px 12px 18px}.bouquetFlower{width:72px;height:72px;border-radius:20px;border:1px solid #fff3;background:#fff1;font-size:38px;cursor:pointer;transition:.25s}.bouquetFlower.selected{transform:translateY(-7px) scale(1.08);background:#ff9fbd33;box-shadow:0 0 25px #ff9fbd88;border-color:#ffd8e5}.bouquetPreview{min-height:52px;padding:12px;border-radius:18px;background:#fff1;border:1px solid #fff2}.letterLine{display:block;white-space:nowrap;text-align:right}.paper{overflow:visible!important;z-index:40!important;line-height:1.85!important}.envelope{overflow:visible!important}.envelope.open .paper{transform:translateY(-155px)!important;z-index:50!important}.envelope.open .flap{z-index:5!important}.lovePopup{position:fixed!important;inset:0!important;z-index:2147483000!important;display:grid!important;place-items:center!important}.lovePopup.show{opacity:1!important;pointer-events:auto!important}.lovePopupBox{position:relative!important;z-index:2147483001!important}`;document.head.appendChild(style);
})();