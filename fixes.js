(()=>{
  const msgBox=()=>document.getElementById('bayanMsg');
  function prepareLetter(){
    const env=document.querySelector('#bayanLetter .envelope');
    if(!env)return;
    env.style.width='min(560px,94vw)';
    env.style.margin='18px auto 30px';
    env.style.transform='translateX(18px)';
    const paper=env.querySelector('.paper');
    if(!paper)return;
    paper.innerHTML='';
    const lines=[
      'صَبَاحُ الخَيْرِ لِوَجْهِكِ الذِي أَقْبَلَ فَأَنَارَ ،',
      'وَلِعَيْنَيْكِ اللَّتَيْنِ تَخْتَصِرَانِ النَّهَارْ',
      'أَشْرَقَتِ الشّمْسُ فَطَابَ الوُجُودُ وَاسْتَدَار،',
      'وأَقْبَلتِ فِي قَلْبِي فَتَوَهَجَ العِشْقُ وَ اسْتَنَارْ',
      'يَبْدَأُ عُمْرِي حِينَمَا يَلُوحُ طَيْفُكِ المَجِيدْ ،',
      'وَيَسْتَقِيمُ نَبْضِي إِذْ يَزُورُنِي حُسْنُكِ الفَرِيدْ',
      'فَمَا الصّبَاحُ فِي عُرْفِي إِلا لَمْحَةً مِنْ خَيَالِكِ ،',
      'وَمَا الضِّيَاءُ فِي كَوْنِي إِلا خُطْوَةً فِي دَلَالِكِ',
      '❤️صَبَاحِي أَنْتِ❤️'
    ];
    lines.forEach((line,i)=>{
      if(i)paper.appendChild(document.createElement('br'));
      const s=document.createElement('span');
      s.className='letterLine';
      s.textContent=line;
      paper.appendChild(s);
    });
  }
  window.openEnvelope=function(){
    if(typeof window.gameCleanup==='function')window.gameCleanup();
    if(typeof window.go==='function')window.go('bayanLetter');
    requestAnimationFrame(()=>{prepareLetter();const env=document.querySelector('#bayanLetter .envelope');if(env)env.classList.add('open')});
  };
  document.addEventListener('DOMContentLoaded',prepareLetter);
  const style=document.createElement('style');
  style.textContent=`
    .letterLine{display:inline!important;white-space:nowrap!important;font-size:19px!important;line-height:1.8!important}
    .paper{overflow:visible!important;z-index:40!important;line-height:1.8!important}
    .envelope{overflow:visible!important}
    .envelope.open .paper{transform:translateY(-155px)!important;z-index:50!important}
    .envelope.open .flap{z-index:5!important}
    @media(max-width:620px){.paper{padding:18px!important}.letterLine{font-size:18px!important}.envelope{transform:translateX(12px)}}
  `;
  document.head.appendChild(style);
})();