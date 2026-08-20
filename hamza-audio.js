(()=>{
  const audio=document.getElementById('audio');
  const SONG='قد كملت.mp3';

  // Keep the existing three worlds, but start their song directly from the user's tap.
  const originalPick=window.pick;
  window.pick=function(name,id){
    if(typeof current!=='undefined') current=id;
    if(audio && songs && songs[id]){
      audio.src=encodeURI(songs[id]);
      audio.loop=true;
      audio.volume=1;
      const start=()=>{
        const p=audio.play();
        if(p&&p.catch)p.catch(()=>{});
      };
      start();
    }
    if(typeof go==='function') go(id);
    if(navigator.vibrate)navigator.vibrate(30);
    if(typeof gameCleanup==='function' && gameCleanup)gameCleanup();
    if(id==='bayan'&&typeof bayanStart==='function')bayanStart();
    if(id==='byoun'&&typeof byounStart==='function')byounStart();
    if(id==='byonti'&&typeof byontiStart==='function')byontiStart();
  };

  const style=document.createElement('style');
  style.textContent=`
    #hamzaPageFix{position:fixed;inset:0;z-index:100000;display:none;overflow:auto;background:radial-gradient(circle at top,#4a203d 0,#180b1b 58%,#0b0610 100%);padding:78px 18px 35px;box-sizing:border-box;text-align:center}
    #hamzaPageFix.show{display:block;animation:hamzaPageIn .45s ease both}
    #hamzaPageFix .hamzaBack{position:fixed;top:18px;right:18px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.12);color:#fff;border-radius:18px;padding:12px 18px;font-size:18px;z-index:2;backdrop-filter:blur(8px)}
    #hamzaPageFix .hamzaLoveCard{max-width:680px;margin:7vh auto 0;padding:42px 25px;border-radius:34px;background:rgba(255,248,252,.97);box-shadow:0 25px 80px rgba(0,0,0,.35);color:#5d2448}
    #hamzaPageFix .hamzaTitle{font-size:clamp(27px,6vw,48px);font-weight:800;line-height:1.7;margin-bottom:28px}
    #hamzaPageFix .hamzaLine{font-size:clamp(25px,6vw,42px);font-weight:800;line-height:2;margin:3px 0}
    @keyframes hamzaPageIn{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}
  `;
  document.head.appendChild(style);

  function page(){
    let page=document.getElementById('hamzaPageFix');
    if(!page){
      page=document.createElement('section');
      page.id='hamzaPageFix';
      page.innerHTML=`<button class="hamzaBack" type="button">↩️ رجوع</button><div class="hamzaLoveCard"><div class="hamzaTitle">الاشي الوحيد الي بقلب حمزة هو انت</div><div class="hamzaLine">💚بحبك بيان💚</div><div class="hamzaLine">🩷بحبك بيون🩷</div><div class="hamzaLine">❤️بحبك بيونتي❤️</div></div>`;
      document.body.appendChild(page);
      page.querySelector('.hamzaBack').onclick=()=>{
        page.classList.remove('show');
        if(audio){audio.pause();audio.currentTime=0;}
        const start=document.getElementById('start');
        if(start)start.classList.add('active');
        document.querySelectorAll('.screen').forEach(s=>{if(s.id!=='start')s.classList.remove('active')});
        window.scrollTo({top:0,behavior:'smooth'});
      };
    }
    page.classList.add('show');
    if(audio){
      audio.src=encodeURI(SONG);audio.loop=true;audio.volume=1;
      const p=audio.play();if(p&&p.catch)p.catch(()=>{});
    }
  }

  window.showHamza=page;
})();
