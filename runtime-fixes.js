(()=>{
  function fixedBox(){
    const b=document.getElementById('giftBox');
    if(!b)return;
    b.classList.toggle('open');
    if(b.classList.contains('open')){
      const m=document.getElementById('byontiMsg');
      if(m){m.textContent='المفاجأة الأولى 🎁: لو أعطيتك كل الكلام، برضه ما بكفي ❤️';m.classList.add('show');m.scrollIntoView({behavior:'smooth',block:'center'});}
      if(typeof window.rain==='function')window.rain(['💗','💖','💕'],30);
    }
  }
  const words=['روحي','حياتي','عمري','قلبي','دنيتي','أغلى ما عندي','أحلى صدفة','راحة بالي'];
  function fixedWords(){
    const out=document.getElementById('word');
    if(!out)return;
    clearInterval(window.__loveWordTimer);
    let i=0;
    out.classList.add('wordSwap');
    out.textContent=words[0];
    window.__loveWordTimer=setInterval(()=>{out.textContent=words[i++%words.length]},500);
    setTimeout(()=>{clearInterval(window.__loveWordTimer);out.textContent=words[(i-1)%words.length]},9000);
  }
  window.box=fixedBox;
  window.wordMachine=fixedWords;
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');
    if(!b)return;
    const t=b.textContent.trim();
    if(t.includes('افتحي الصندوق')){e.preventDefault();e.stopImmediatePropagation();fixedBox();return;}
    if(t.includes('كلمات تتغير قدامك')){e.preventDefault();e.stopImmediatePropagation();fixedWords();return;}
  },true);
})();
