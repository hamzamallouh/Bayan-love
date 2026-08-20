(()=>{
  const audio=document.getElementById('audio');
  const SONG='قد كملت.mp3';
  const style=document.createElement('style');
  style.textContent=`#hamzaFullPage{position:fixed;inset:0;z-index:100000;display:none;overflow:auto;background:linear-gradient(160deg,#fff5fa,#ffe8f3 55%,#fff);padding:28px 18px;box-sizing:border-box}#hamzaFullPage.show{display:block;animation:hamzaIn .35s ease both}#hamzaFullPage .hamzaBack{position:absolute;top:20px;right:20px;border:0;border-radius:16px;padding:11px 18px;background:#fff;color:#8b315e;font-size:17px;box-shadow:0 5px 20px rgba(120,40,80,.15)}#hamzaFullPage .hamzaContent{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:22px;padding:60px 10px 35px}#hamzaFullPage .hamzaTitle{font-size:clamp(28px,7vw,48px);font-weight:800;color:#7d214f;line-height:1.7}#hamzaFullPage .hamzaLine{font-size:clamp(25px,6.5vw,43px);font-weight:800;line-height:1.8}#hamzaFullPage .g{color:#249447}.p{color:#d94b9a}.r{color:#e32645}@keyframes hamzaIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}`;document.head.appendChild(style);
  function openHamza(){
    let page=document.getElementById('hamzaFullPage');
    if(!page){
      page=document.createElement('section');page.id='hamzaFullPage';
      page.innerHTML='<button class="hamzaBack" type="button">↩️ رجوع</button><div class="hamzaContent"><div class="hamzaTitle">الاشي الوحيد الي بقلب حمزة هو انت</div><div class="hamzaLine g">💚بحبك بيان💚</div><div class="hamzaLine p">🩷بحبك بيون🩷</div><div class="hamzaLine r">❤️بحبك بيونتي❤️</div></div>';
      document.body.appendChild(page);
      page.querySelector('.hamzaBack').onclick=()=>{page.classList.remove('show');if(audio){audio.pause();audio.currentTime=0}document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById('start')?.classList.add('active');window.scrollTo(0,0)};
    }
    page.classList.add('show');
    if(audio){audio.src=encodeURI(SONG);audio.loop=true;audio.volume=1;const p=audio.play();if(p&&p.catch)p.catch(()=>{})}
  }
  window.showHamza=openHamza;
})();