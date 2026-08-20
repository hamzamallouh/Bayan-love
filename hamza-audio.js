(()=>{
  const audio=document.getElementById('audio');
  const SONG='قد كملت.mp3';
  window.showHamza=()=>{
    if(audio){audio.src=encodeURI(SONG);audio.loop=true;audio.load();audio.play().catch(()=>{});}
    let box=document.getElementById('hamzaLovePopup');
    if(!box){
      box=document.createElement('div');box.id='hamzaLovePopup';
      box.innerHTML='<div class="hamzaLoveInner">الاشي الوحيد الي بقلب حمزة هو انت<br><br><span>💚بحبك بيان💚</span><br><span>🩷بحبك بيون🩷</span><br><span>❤️بحبك بيونتي❤️</span></div>';
      document.body.appendChild(box);
    }
    box.classList.remove('show');void box.offsetWidth;box.classList.add('show');
    setTimeout(()=>box.classList.remove('show'),8000);
  };
})();
