(()=>{
const rounds=[
{type:'joke',title:'نكتة سريعة 😂',html:'مرة واحد سأل صاحبه: ليش بتفتح الثلاجة كل شوي؟<br>قاله: <b>بستنى الشبكة تمسك.</b> 😂<small>إذا هاي ما زبطت… عندي أسوأ 😭</small>'},
{type:'choice',title:'مين قالها؟ 👀',question:'«أنا مش زعلانة… بس بدي أحكي معك شوي.»',choices:['بيان ❤️','حمزة 😂','الاثنين 😭'],answer:0,success:'الجواب الصح غالبًا: بيان 😂❤️'},
{type:'joke',title:'مستوى السخافة 🤦‍♂️',html:'مرة واحد راح يشتري نظارة…<br>البائع سأله: نظر ولا شمس؟<br>قاله: <b>لا، حمزة.</b> 😂<small>آسف… النكتة نفسها اعتذرت.</small>'},
{type:'choice',title:'اختبار النجاة 😂',question:'بيان قالت: «ما بدي شي…» شو التصرف الصحيح؟',choices:['أصدقها فورًا','أسألها مرة ثانية','أجهز خطة طوارئ كاملة 😭'],answer:2,success:'ممتاز! عندك فرصة تنجو 😂❤️'},
{type:'joke',title:'موقف حمزة الرسمي 😂',html:'حمزة: اليوم بنام بكير.<br>أيضًا حمزة الساعة 2:47: <b>طيب اسمعي آخر شغلة بس…</b> 😭<small>وبعدين آخر شغلة إلها 17 جزء.</small>'},
{type:'choice',title:'امتحان الذكاء العاطفي 🧠',question:'إذا بيان قالت: «عادي» بصوت هادي جدًا… شو معناها؟',choices:['عادي فعلًا 😌','لازم أراجع قراراتي بالحياة 😭','أفتح اجتماع طوارئ فورًا 🚨'],answer:1,success:'بالضبط 😂 لا تثق بكلمة «عادي» بسهولة.'},
{type:'joke',title:'الضربة القاضية الخفيفة 🥲',html:'أنا لما أقرر أكون شخص ناضج وهادئ…<br>وبعدين أشوف رسالة من الشخص اللي بحبه: <b>«وينك؟»</b><br><br>انتهت مرحلة النضج. 😂❤️'},
{type:'choice',title:'سؤال مستفز جدًا 😈',question:'مين أحلى؟',choices:['بيان 🌷','بيان ❤️','أكيد بيان 😭❤️'],answer:2,success:'إجابة ممتازة. ما كان في خيارات ثانية أصلًا 😂❤️'},
{type:'joke',title:'حمزة ضد النوم 🛌',html:'حمزة: لازم أنام، بكرا عندي شغل.<br>عقله الساعة 1:59: <b>بتتذكر موقف صار سنة 2017؟</b><br>حمزة: لا.<br>عقله: <b>ممتاز، خلينا نحلله.</b> 😭😂'},
{type:'choice',title:'آخر باب… 🚪😂',question:'إذا ضحكتي الآن، مين فاز؟',choices:['بيان لأنها ضحكت ❤️','حمزة لأنه حقق المهمة 😂','الدنيا كلها لأنها نورت ✨'],answer:2,success:'هذه الإجابة المعتمدة رسميًا ❤️😂 الدنيا كلها نورت!'}
];
let i=0,score=0,started=false;
const $=s=>document.querySelector(s);
function sound(){const a=new Audio(encodeURI('ضحكة.mp3'));a.preload='auto';a.volume=.9;a.currentTime=0;a.play().catch(()=>{});}
window.playLaughSound=sound;
function confetti(){for(let n=0;n<32;n++){const e=document.createElement('span');e.className='lm-confetti';e.textContent=['😂','❤️','💗','✨','🤣','🎉'][n%6];e.style.left='50vw';e.style.top='50vh';e.style.setProperty('--x',`${Math.random()*500-250}px`);e.style.setProperty('--y',`${Math.random()*560-280}px`);document.body.appendChild(e);setTimeout(()=>e.remove(),1300)}}
function float(){const e=document.createElement('span');e.className='lm-float';e.textContent=['😂','🤣','❤️','💗','✨','😌'][Math.floor(Math.random()*6)];e.style.left=Math.random()*100+'vw';e.style.setProperty('--x',(Math.random()*180-90)+'px');e.style.animationDuration=(7+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),13000)}
setInterval(float,1100);for(let n=0;n<6;n++)setTimeout(float,n*450);
function render(){const r=rounds[i];$('#lmCounter').textContent=`${i+1} / ${rounds.length}`;$('#lmTitle').textContent=r.title;$('#lmResult').textContent='';const c=$('#lmContent');c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');if(r.type==='choice'){c.innerHTML=`<div class="lm-choice"><div class="lm-joke">${r.question}</div>${r.choices.map((x,k)=>`<button data-choice="${k}">${x}</button>`).join('')}</div>`;c.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>choose(+b.dataset.choice));}else c.innerHTML=`<div class="lm-joke">${r.html}<div style="margin-top:20px"><button class="lm-btn" id="lmGotIt">😂 ضحكتني، اللي بعدها</button></div></div>`;if($('#lmGotIt'))$('#lmGotIt').onclick=next}
function choose(k){const r=rounds[i];if(k===r.answer){score++;$('#lmResult').textContent=r.success;confetti();sound();setTimeout(next,1300)}else{$('#lmResult').textContent=['قريبة 😂 جربي مرة ثانية','هههه لااا 😭','فكري فيها شوي 😂','حاولي تنقذي الموقف 😭'][Math.floor(Math.random()*4)];sound()}}
function next(){if(!started)return;i++;if(i>=rounds.length)return finish();sound();render()}
function finish(){sound();confetti();$('#lmArena').classList.remove('active');$('#lmWin').classList.add('show');$('#lmScore').textContent=`ضحكنا ${score} مرات من ${rounds.length} تحديات ❤️`}
window.startLaughMission=()=>{started=true;i=0;score=0;$('#lmStart').style.display='none';$('#lmArena').classList.add('active');sound();render()};window.nextLaugh=next;window.restartLaugh=()=>{$('#lmWin').classList.remove('show');$('#lmArena').classList.remove('active');$('#lmStart').style.display='flex';started=false};
})();
