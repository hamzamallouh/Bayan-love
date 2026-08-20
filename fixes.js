(()=>{
  function prepareLetter(){
    const env=document.querySelector('#bayanLetter .envelope'); if(!env)return;
    env.style.width='min(560px,94vw)';
    env.style.height='680px';
    env.style.margin='18px auto 30px';
    env.style.transform='translateX(18px)';
    const paper=env.querySelector('.paper'); if(!paper)return;
    paper.style.height='640px';
    paper.style.minHeight='0';
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
    if(env.classList.contains('open')){
      paper.style.zIndex='30'; flap.style.zIndex='5'; if(seal)seal.style.zIndex='31';
    }else{
      flap.style.zIndex='30'; paper.style.zIndex='10'; if(seal)seal.style.zIndex='31';
    }
  }
  window.openEnvelope=function(){
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    requestAnimationFrame(()=>{prepareLetter();const env=document.querySelector('#bayanLetter .envelope');if(env){env.classList.add('open');syncEnvelopeLayers(env)}});
  };

  // Keep the message box visible whenever a button creates a new message.
  const originalMsg=window.msg;
  window.msg=function(id,text){
    if(typeof originalMsg==='function') originalMsg(id,text);
    const el=document.getElementById(id);
    if(!el)return;
    el.classList.add('show');
    setTimeout(()=>{
      const r=el.getBoundingClientRect();
      const top=r.top+window.scrollY;
      window.scrollTo({top:Math.max(0,top-110),behavior:'smooth'});
    },80);
  };

  // Bayan bouquet: the rain is made ONLY from the three flowers she selected.
  window.bouquetGame=function(){
    const st=document.getElementById('bayanStage');
    if(!st)return;
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    window.gameCleanup=null;
    st.innerHTML='<div class="msg show">اختاري 3 ورود لتصنعي باقة بيان 🌷 وبعدها بتنزل نفس ورودك كمطر ❤️</div>';
    const flowers=['🌹','🌷','🌸','🌺','🌻','🌼','🪻','💐'];
    const selected=[];
    flowers.sort(()=>Math.random()-0.5).slice(0,5).forEach((flower,i)=>{
      const b=document.createElement('button');
      b.className='tapHeart bouquetFlower';
      b.textContent=flower;
      b.setAttribute('aria-label','اختاري '+flower);
      b.style.left=(8+i*18)+'%';
      b.style.top=(38+(i%2)*20)+'%';
      b.onclick=()=>{
        if(b.disabled||selected.length>=3)return;
        selected.push(flower); b.disabled=true; b.classList.add('selected');
        b.style.transform='scale(1.28)';
        if(selected.length===3){
          const chosen=[...selected];
          if(typeof originalMsg==='function')originalMsg('bayanMsg','باقة بيان اختارتها إنتِ: '+chosen.join(' ')+' ❤️');
          const dropTimer=setTimeout(()=>window.rain(chosen,42),180);
          window.gameCleanup=()=>clearTimeout(dropTimer);
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
    .letterText>div{display:block;margin:0 0 12px;white-space:normal;overflow-wrap:normal}
    .letterText>div:last-child{margin-bottom:0}
    .envelope{isolation:isolate!important;position:relative!important;overflow:visible!important}
    .envelope .envbody{z-index:1!important;position:absolute!important}
    .envelope .paper{z-index:10!important;position:absolute!important}
    .envelope .flap{z-index:30!important;position:absolute!important}
    .envelope .seal{z-index:31!important;position:absolute!important}
    .envelope:not(.open) .paper{z-index:10!important;transform:translateY(-90px)!important}
    .envelope:not(.open) .flap{z-index:30!important;transform:none!important}
    .envelope:not(.open) .seal{z-index:31!important}
    .envelope.open .paper{z-index:30!important;transform:translateY(-155px)!important}
    .envelope.open .flap{z-index:5!important}
    .envelope.open .seal{z-index:31!important}
    .paper{height:640px!important;min-height:0!important;overflow:visible!important;padding:22px!important;box-sizing:border-box}
    .bouquetFlower.selected{filter:drop-shadow(0 0 12px rgba(255,105,180,.8));opacity:.85}
    @media(max-width:620px){.letterText{font-size:16px!important;line-height:1.62!important}.paper{height:640px!important;padding:18px!important}.envelope{height:680px!important;transform:translateX(12px)!important}.envelope:not(.open) .paper{transform:translateY(-75px)!important}.envelope.open .paper{transform:translateY(-155px)!important}}
  `;document.head.appendChild(style);
})();