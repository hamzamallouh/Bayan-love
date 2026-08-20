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
  }
  window.openEnvelope=function(){if(typeof window.gameCleanup==='function')window.gameCleanup();if(typeof window.go==='function')window.go('bayanLetter');requestAnimationFrame(()=>{prepareLetter();const env=document.querySelector('#bayanLetter .envelope');if(env)env.classList.add('open')})};
  document.addEventListener('DOMContentLoaded',prepareLetter);
  const style=document.createElement('style');style.textContent=`
    .letterText{direction:rtl;text-align:right;font-size:18px!important;line-height:1.72!important;width:100%;box-sizing:border-box}
    .letterText>div{display:block;margin:0 0 12px;white-space:normal;overflow-wrap:normal}
    .letterText>div:last-child{margin-bottom:0}
    .paper{height:640px!important;min-height:0!important;overflow:visible!important;padding:22px!important;box-sizing:border-box;z-index:40!important;transform:translateY(-90px)!important}
    .envelope{height:680px!important;overflow:visible!important;transform:translateX(18px)!important}
    .envelope:not(.open) .paper{z-index:40!important;transform:translateY(-90px)!important}
    .envelope:not(.open) .flap{z-index:60!important}
    .envelope.open .paper{transform:translateY(-155px)!important;z-index:50!important}
    .envelope.open .flap{z-index:5!important}
    @media(max-width:620px){.letterText{font-size:16px!important;line-height:1.62!important}.paper{height:640px!important;padding:18px!important}.envelope{height:680px!important;transform:translateX(12px)!important}.envelope:not(.open) .paper{transform:translateY(-75px)!important}.envelope.open .paper{transform:translateY(-155px)!important}}
  `;document.head.appendChild(style);
})();