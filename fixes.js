(()=>{
  function prepareLetter(){
    const env=document.querySelector('#bayanLetter .envelope'); if(!env)return;
    env.style.width='min(560px,94vw)';
    env.style.height='680px';
    env.style.margin='18px auto 30px';
    env.style.transform='translateX(18px)';
    const paper=env.querySelector('.paper'); if(!paper)return;
    paper.style.height='640px'; paper.style.minHeight='0';
    paper.innerHTML=`<div class="letterText">
      <div>صَبَاحُ الخَيْرِ لِوَجْهِكِ الذِي أَقْبَلَ فَأَنَارَ ، وَلِعَيْنَيْكِ اللَّتَيْنِ تَخْتَصِرَانِ النَّهَارْ</div>
      <div>أَشْرَقَتِ الشّمْسُ فَطَابَ الوُجُودُ وَاسْتَدَار، وأَقْبَلتِ فِي قَلْبِي فَتَوَهَجَ العِشْقُ وَ اسْتَنَارْ</div>
      <div>يَبْدَأُ عُمْرِي حِينَمَا يَلُوحُ طَيْفُكِ المَجِيدْ ، وَيَسْتَقِيمُ نَبْضِي إِذْ يَزُورُنِي حُسْنُكِ الفَرِيدْ</div>
      <div>فَمَا الصّبَاحُ فِي عُرْفِي إِلا لَمْحَةً مِنْ خَيَالِكِ ، وَمَا الضِّيَاءُ فِي كَوْنِي إِلا خُطْوَةً فِي دَلَالِكِ ... ❤️صَبَاحِي أَنْتِ❤️</div>
    </div>`;
    syncEnvelopeLayers(env);
  }
  function syncEnvelopeLayers(env){
    const paper=env.querySelector('.paper'), flap=env.querySelector('.flap'), seal=env.querySelector('.seal');
    if(!paper||!flap)return;
    if(env.classList.contains('open')){paper.style.zIndex='30';flap.style.zIndex='5';if(seal)seal.style.zIndex='31';}
    else{flap.style.zIndex='30';paper.style.zIndex='10';if(seal)seal.style.zIndex='31';}
  }
  window.openEnvelope=function(){
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    requestAnimationFrame(()=>{prepareLetter();const env=document.querySelector('#bayanLetter .envelope');if(env){env.classList.add('open');syncEnvelopeLayers(env)}});
  };

  // Reliable auto-scroll: whenever an active-world message is shown, bring it into view.
  function scrollToActiveMessage(){
    const active=document.querySelector('.screen.active');
    if(!active||active.id==='bayanLetter')return;
    const box=active.querySelector('.msg.show');
    if(!box)return;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      box.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
    }));
  }
  const originalMsg=window.msg;
  window.msg=function(id,text){
    if(typeof originalMsg==='function')originalMsg(id,text);
    const el=document.getElementById(id); if(!el)return;
    el.classList.add('show');
    setTimeout(scrollToActiveMessage,70);
  };
  document.addEventListener('click',e=>{
    const active=document.querySelector('.screen.active');
    if(!active||active.id==='bayanLetter')return;
    if(e.target.closest('.tile,.btn,.premiumBtn,.game,.choice'))setTimeout(scrollToActiveMessage,120);
  },true);

  // Bayan bouquet: select exactly three flowers, then rain only those selected flowers.
  window.bouquetGame=function(){
    const st=document.getElementById('bayanStage'); if(!st)return;
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    window.gameCleanup=null;
    st.innerHTML='<div class="msg show">اختاري 3 ورود من الباقة 🌷 وبعدها رح ينزل مطر من نفس ورودك ❤️</div>';
    const flowers=['🌹','🌷','🌸','🌺','🌻','🌼','🪻','💐'].sort(()=>Math.random()-0.5).slice(0,6);
    const selected=[];
    flowers.forEach((flower,i)=>{
      const b=document.createElement('button');
      b.className='tapHeart bouquetFlower'; b.textContent=flower;
      b.setAttribute('aria-label','اختاري '+flower);
      b.style.left=(7+i*15)+'%'; b.style.top=(36+(i%3)*20)+'%';
      b.onclick=()=>{
        if(b.disabled||selected.length>=3)return;
        b.disabled=true; selected.push(flower); b.classList.add('selected'); b.style.transform='scale(1.3)';
        if(selected.length===3){
          const chosen=[...selected];
          window.msg('bayanMsg','باقة بيان اختارتها إنتِ: '+chosen.join(' ')+' ❤️');
          setTimeout(()=>window.rain(chosen,42),300);
        }
      };
      st.appendChild(b);
    });
  };

  document.addEventListener('DOMContentLoaded',()=>{
    prepareLetter();
    const env=document.querySelector('#bayanLetter .envelope');
    if(env)env.addEventListener('click',()=>requestAnimationFrame(()=>syncEnvelopeLayers(env)));
  });

  const style=document.createElement('style');style.textContent=`
    .letterText{direction:rtl;text-align:right;font-size:18px!important;line-height:1.72!important;width:100%;box-sizing:border-box}
    .letterText>div{display:block;margin:0 0 12px;white-space:normal;overflow-wrap:normal}.letterText>div:last-child{margin-bottom:0}
    .envelope{isolation:isolate!important;position:relative!important;overflow:visible!important}
    .envelope .envbody{z-index:1!important;position:absolute!important}.envelope .paper{z-index:10!important;position:absolute!important}.envelope .flap{z-index:30!important;position:absolute!important}.envelope .seal{z-index:31!important;position:absolute!important}
    .envelope:not(.open) .paper{z-index:10!important;transform:translateY(-90px)!important}.envelope:not(.open) .flap{z-index:30!important;transform:none!important}.envelope.open .paper{z-index:30!important;transform:translateY(-155px)!important}.envelope.open .flap{z-index:5!important}
    .paper{height:640px!important;min-height:0!important;overflow:visible!important;padding:22px!important;box-sizing:border-box}
    .bouquetFlower.selected{filter:drop-shadow(0 0 12px rgba(255,105,180,.8));opacity:.85}
    @media(max-width:620px){.letterText{font-size:16px!important;line-height:1.62!important}.paper{height:640px!important;padding:18px!important}.envelope{height:680px!important;transform:translateX(12px)!important}.envelope:not(.open) .paper{transform:translateY(-75px)!important}.envelope.open .paper{transform:translateY(-155px)!important}}
  `;document.head.appendChild(style);
})();