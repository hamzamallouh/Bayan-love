(()=>{
const rounds=[
{type:'joke',title:'😂 أول ضربة',html:'واحد راح عند الحلاق وقاله: <b>«بدي قصة تغيّر حياتي.»</b><br>الحلاق قصّله شعره.<br>طلع من عنده… ورجع عالبيت لقى إن حياته نفسها، بس شعره تغيّر. 😭😂'},
{type:'joke',title:'📱 منطق التلفون',html:'واحد اشترى تلفون جديد، وأول ما فتحه لقى مكتوب: <b>«هل أنت متأكد؟»</b><br>قال: «أكيد.»<br>التلفون: <b>«متأكد إنك متأكد؟»</b><br>قال: «لا والله، بلشنا شك.» 😂'},
{type:'joke',title:'🍕 القرار الصعب',html:'واحد قعد مع صاحبه وقاله: «شو نطلب؟»<br>قاله: «أي شي.»<br>قاله: «بيتزا؟» — «لا.»<br>«برغر؟» — «لا.»<br>«شاورما؟» — «لا.»<br>قاله: <b>«طيب كلمة أي شي عندك إلها تعريف ثاني؟»</b> 😂'},
{type:'choice',title:'🧠 سؤال يحتاج لجنة',question:'ليش لما نحط المنبّه على 6:00 بنصحى 5:59؟',choices:['الجسم عنده نظام إنذار سري 😎','العقل بخاف يسبقه المنبّه 😂','لأن المنبّه نفسه فقد الثقة فينا'],answer:1,success:'😂 بالضبط! جسمك بحب يثبت إنه أذكى من المنبّه.'},
{type:'joke',title:'🛒 مهمة مستحيلة',html:'دخل واحد محل وقال للبائع: «عندك شي رخيص ومفيد؟»<br>قاله: «آه، عندي نصيحة.»<br>قاله: «بكم؟»<br>قاله: <b>«مجّانًا.»</b><br>قاله: «لا، شكراً… بدي إشي أقدر أرجعه إذا ما عجبني.» 😂'},
{type:'joke',title:'😴 قبل النوم',html:'أنا: <b>«اليوم بنام بكير.»</b><br>الساعة 10: «ممتاز.»<br>الساعة 11: «عادي.»<br>الساعة 12: «آخر فيديو.»<br>الساعة 2:30: <b>«كيف يعني سمكة القرش بتنام وهي بتسبح؟»</b> 😭😂'},
{type:'choice',title:'😂 تعريف رسمي',question:'شو أسرع شيء بالعالم؟',choices:['الضوء ⚡','الصاروخ 🚀','الوقت لما يكون عندك موعد 😭'],answer:2,success:'😂 صح! الوقت وقت الموعد عنده سيارة فورمولا 1.'},
{type:'joke',title:'☕ القهوة',html:'واحد شرب قهوة عشان يصحصح.<br>بعد خمس دقائق صار صاحي لدرجة إنه تذكّر <b>موقف محرج صار معه سنة 2017.</b><br>قال: <b>«أنا طلبت نشاط… مش أرشيف ذكريات!»</b> 😭😂'},
{type:'joke',title:'🧾 الحساب',html:'واحد فتح تطبيق البنك بعد ما صرف طول الشهر.<br>طلع الحساب فاضي تقريبًا.<br>قال: <b>«غريب… أنا متذكر إني كنت غني قبل أسبوع.»</b><br>التطبيق: «وأنا متذكر وين راحوا.» 😂'},
{type:'choice',title:'🤔 فلسفة آخر الليل',question:'إذا قلت لنفسك «بس خمس دقايق على التلفون»… شو بصير غالبًا؟',choices:['خمس دقايق فعلًا ⏱️','نص ساعة بالغلط 😂','أطلع أعرف أخبار شخص ما بعرفه من 2014'],answer:1,success:'😂 خمس دقايق على التلفون أطول وحدة زمنية معروفة للبشر.'},
{type:'joke',title:'🚗 الملاحة',html:'واحد ضيّع الطريق وشغّل الـGPS.<br>الـGPS قاله: <b>«أعد حساب المسار.»</b><br>قاله: «حاضر.»<br>بعد ثلاث لفات رجع لنفس المكان.<br>قال: <b>«إحنا الاثنين بدنا حدا يعيد حساب المسار.»</b> 😂'},
{type:'joke',title:'🏆 الضربة الأخيرة',html:'واحد قال لصاحبه: «أنا عندي ذاكرة قوية جدًا.»<br>قاله: «من متى؟»<br>قاله: <b>«من متى شو؟»</b><br><br>وبهيك انتهت أقوى شهادة على قوة الذاكرة. 😂'}
];
let i=0,score=0,started=false;
const $=s=>document.querySelector(s);
// صوت الضحكة لا يتم إنشاؤه أو تشغيله إلا بعد ضغط زر «ضحكتني!». لا يوجد تشغيل تلقائي.
function laugh(){
 const a=new Audio('ضحكة.mp3');
 a.volume=.9;
 a.play().catch(()=>{});
 confetti();
}
function confetti(){for(let n=0;n<18;n++){const e=document.createElement('span');e.className='lm-confetti';e.textContent=['😂','❤️','💗','✨','🤣'][n%5];e.style.left='50vw';e.style.top='52vh';e.style.setProperty('--x',`${Math.random()*420-210}px`);e.style.setProperty('--y',`${Math.random()*420-210}px`);document.body.appendChild(e);setTimeout(()=>e.remove(),1200)}}
function float(){const e=document.createElement('span');e.className='lm-float';e.textContent=['😂','🤣','❤️','💗','✨','😌'][Math.floor(Math.random()*6)];e.style.left=Math.random()*100+'vw';e.style.setProperty('--x',(Math.random()*180-90)+'px');e.style.animationDuration=(7+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),13000)}
setInterval(float,1100);for(let n=0;n<6;n++)setTimeout(float,n*450);
function likedButton(){return `<button class="lm-btn" id="lmLiked">😂 ضحكتني! شغّلي الضحكة</button>`}
function nextButton(){return `<button class="lm-btn alt" id="lmNextBtn">➡️ اللي بعدها</button>`}
function bindActions(){
 const liked=$('#lmLiked');
 const next=$('#lmNextBtn');
 if(liked)liked.onclick=()=>{laugh();$('#lmResult').textContent='😂❤️ هاي محسوبة ضحكة رسمية!';liked.textContent='🤣 الضحكة اشتغلت!';liked.disabled=true};
 if(next)next.onclick=()=>{i++;if(i>=rounds.length)finish();else render()};
}
function render(){const r=rounds[i];$('#lmCounter').textContent=`${i+1} / ${rounds.length}`;$('#lmTitle').textContent=r.title;$('#lmResult').textContent='';const c=$('#lmContent');c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');
if(r.type==='choice'){
 c.innerHTML=`<div class="lm-choice"><div class="lm-joke">${r.question}</div>${r.choices.map((x,k)=>`<button data-choice="${k}">${x}</button>`).join('')}<div id="lmAfterChoice" class="lm-after"></div></div>`;
 c.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>choose(+b.dataset.choice));
}else{
 c.innerHTML=`<div class="lm-joke">${r.html}<div class="lm-actions-inner">${likedButton()}${nextButton()}</div></div>`;
 bindActions();
}}
function choose(k){const r=rounds[i];const after=$('#lmAfterChoice');if(k===r.answer){score++;$('#lmResult').textContent=r.success;confetti()}else{$('#lmResult').textContent=['قريبة 😂 جرّبي تفكري فيها مرة ثانية','هههه لا 😭 هاي كانت فخ','جواب محترم… بس مش هو 😂','قريبة جدًا 😂'][Math.floor(Math.random()*4)];}after.innerHTML=`<div class="lm-actions-inner">${likedButton()}${nextButton()}</div>`;bindActions()}
function finish(){confetti();$('#lmArena').classList.remove('active');$('#lmWin').classList.add('show');$('#lmScore').textContent=`خلصنا ${rounds.length} تحديات، والنتيجة: ${score} إجابات صح ❤️`}
window.startLaughMission=()=>{started=true;i=0;score=0;$('#lmStart').style.display='none';$('#lmArena').classList.add('active');render()};
window.nextLaugh=()=>{if(!started)return;i++;if(i>=rounds.length)finish();else render()};
window.restartLaugh=()=>{$('#lmWin').classList.remove('show');$('#lmArena').classList.remove('active');$('#lmStart').style.display='flex';started=false};
})();
