(()=>{
  function prepareLetter(){
    const env=document.querySelector('#bayanLetter .envelope'); if(!env)return;
    env.style.width='min(560px,94vw)'; env.style.margin='18px auto 30px'; env.style.transform='translateX(18px)';
    const paper=env.querySelector('.paper'); if(!paper)return;
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
    .letterText{direction:rtl;text-align:right;font-size:18px!important;line-height:1.9!important;width:100%;box-sizing:border-box}
    .letterText>div{display:block;margin:0 0 13px;white-space:normal;overflow-wrap:normal}
    .letterText>div:last-child{margin-bottom:0}
    .paper{overflow:visible!important;z-index:40!important;padding:22px!important;box-sizing:border-box}
    .envelope{overflow:visible!important}
    .envelope.open .paper{transform:translateY(-155px)!important;z-index:50!important}
    .envelope.open .flap{z-index:5!important}
    @media(max-width:620px){.letterText{font-size:17px!important;line-height:1.85!important}.paper{padding:18px!important}.envelope{transform:translateX(12px)}}
  `;document.head.appendChild(style);
})();