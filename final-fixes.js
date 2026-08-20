(()=>{
  const $=id=>document.getElementById(id);
  const words=['روحي','حياتي','عمري','قلبي','دنيتي','أغلى ما عندي','أحلى صدفة','راحة بالي'];
  let wordTimer=null;
  function scrollStage(){const st=$('byontiStage');if(st)setTimeout(()=>st.scrollIntoView({behavior:'smooth',block:'center'}),100)}
  function reliableWordMachine(){
    const out=$('word'); if(!out)return;
    clearInterval(wordTimer); let i=0;
    out.classList.add('wordSwap');
    out.textContent=words[0];
    wordTimer=setInterval(()=>{out.textContent=words[i++%words.length]},350);
    setTimeout(()=>clearInterval(wordTimer),9000);
    scrollStage();
  }
  function reliableBox(){
    const b=$('giftBox'); if(!b)return;
    b.classList.add('open');
    const lid=b.querySelector('.lid'); if(lid)lid.style.transform='rotate(-12deg) translateY(-18px)';
    const m=$('byontiMsg'); if(m){m.textContent='المفاجأة الأولى 🎁: لو أعطيتك كل الكلام، برضه ما بكفي ❤️';m.classList.add('show')}
    if(typeof window.rain==='function')window.rain(['💗','💖','💕','💘'],30);
    scrollStage();
  }
  function bind(){
    const sec=$('byonti');if(!sec)return;
    [...sec.querySelectorAll('.tools .tile')].forEach(b=>{
      const t=b.textContent.trim();
      if(t.includes('افتحي الصندوق')){b.onclick=reliableBox}
      if(t.includes('كلمات تتغير')){b.onclick=reliableWordMachine}
    });
    const box=$('giftBox');if(box)box.onclick=reliableBox;
  }
  window.reliableWordMachine=reliableWordMachine;
  window.reliableBox=reliableBox;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
  window.addEventListener('load',()=>setTimeout(bind,100));
})();
