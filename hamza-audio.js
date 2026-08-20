(()=>{
  const audio=document.getElementById('audio');
  const SONG='قد كملت.mp3';
  window.showHamza=()=>{
    if(audio){audio.src=encodeURI(SONG);audio.loop=true;audio.load();audio.play().catch(()=>{});}
    let box=document.getElementById('hamzaLovePopup');
    if(!box){box=document.createElement('div');box.id='hamzaLovePopup';box.innerHTML='<div class="hamzaLoveInner">بحبك بيان بحبك ❤️</div>';document.body.appendChild(box);}
    box.classList.remove('show');void box.offsetWidth;box.classList.add('show');
    setTimeout(()=>box.classList.remove('show'),6000);
  };
})();
