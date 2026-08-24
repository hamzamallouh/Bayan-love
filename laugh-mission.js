(()=>{
const rounds=[
{type:'joke',title:'🐔 أول ضربة',html:'واحد عنده مزرعة فراخ تعب… جاله ديك <b>تنفّس.</b> 😂'},
{type:'joke',title:'🍞 مدرس الإنجليزي',html:'مرة مدرس إنجليزي مرته جابتله الأكل من غير عيش، قالها: <b>معقول هاكل have كده؟</b> 😂'},
{type:'joke',title:'🍦 الآيس كريم',html:'مرة آيس كريم وقع من الدور الرابع وقال: <b>الحسووووووووني!</b> 🌚😂'},
{type:'joke',title:'🛒 السوبر ماركت',html:'مرة اتنين دخلوا سوبر ماركت… واحد اشترى <b>بسكوت</b> والتاني <b>بكلام.</b> 🌚😂'},
{type:'joke',title:'🍚 الحلة',html:'مرة حلة رز شاطت… <b>جابت جون نينينينينيني!</b> 😂'},
{type:'joke',title:'⚽ اللاعب',html:'مرة لاعب شاط… والتاني <b>اتحرق!</b> نهاهاها 🌚😂'},
{type:'joke',title:'🍊 الرمانة',html:'بيقولك مرة رمانة زعلانة ليه؟ قالتله: <b>عشان الناس عمالة تفرّط فيا.</b> 😂'},
{type:'joke',title:'➗ مدرس الرياضيات',html:'مرة مدرس رياضيات عمل حادثة، قالوله: <b>فيه كسور كتير!</b> قالهم: <b>وحّدوا المقامات.</b> 😂'},
{type:'joke',title:'🦕 نادر ونادرة',html:'مرة واحد اسمه نادر اتجوز واحدة اسمها نادرة… جابوا ولد سموه: <b>مهدد بالانقراض.</b> نينينينيني 😂'},
{type:'joke',title:'📐 ساندى',html:'مرة واحدة اسمها ساندى دخلت كلية هندسة… بقى اسمها <b>ساندي متر مربع.</b> 😑😂'},
{type:'joke',title:'🦟 القرعة',html:'مرة واحد أقرع، ناموسة وقفت على راسه… <b>اتزحلقت.</b> 😂💔'},
{type:'joke',title:'☀️ ندى',html:'مرة واحدة اسمها ندى وقفت في الشمس… <b>اتبخرت.</b> 😂💔'},
{type:'joke',title:'🌹 وردة',html:'مرة بنت اسمها وردة، أبوها صحي من النوم ملقاهاش… قال: <b>الحقوني بنتي اتقطفت!</b> 🙂😂'}
];
let i=0,score=0,started=false;
const $=s=>document.querySelector(s);
function laugh(){const a=new Audio('ضحكة.mp3');a.volume=.9;a.play().catch(()=>{});confetti()}
function confetti(){for(let n=0;n<18;n++){const e=document.createElement('span');e.className='lm-confetti';e.textContent=['😂','❤️','💗','✨','🤣'][n%5];e.style.left='50vw';e.style.top='52vh';e.style.setProperty('--x',`${Math.random()*420-210}px`);e.style.setProperty('--y',`${Math.random()*420-210}px`);document.body.appendChild(e);setTimeout(()=>e.remove(),1200)}}
function float(){const e=document.createElement('span');e.className='lm-float';e.textContent=['😂','🤣','❤️','💗','✨','😌'][Math.floor(Math.random()*6)];e.style.left=Math.random()*100+'vw';e.style.setProperty('--x',(Math.random()*180-90)+'px');e.style.animationDuration=(7+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),13000)}
setInterval(float,1100);for(let n=0;n<6;n++)setTimeout(float,n*450);
function likedButton(){return `<button class="lm-btn" id="lmLiked">😂 ضحكتني! شغّلي الضحكة</button>`}
function nextButton(){return `<button class="lm-btn alt" id="lmNextBtn">➡️ اللي بعدها</button>`}
function bindActions(){const liked=$('#lmLiked'),next=$('#lmNextBtn');if(liked)liked.onclick=()=>{laugh();$('#lmResult').textContent='😂❤️ هاي محسوبة ضحكة رسمية!';liked.textContent='🤣 الضحكة اشتغلت!';liked.disabled=true};if(next)next.onclick=()=>{i++;if(i>=rounds.length)finish();else render()}}
function render(){const r=rounds[i];$('#lmCounter').textContent=`${i+1} / ${rounds.length}`;$('#lmTitle').textContent=r.title;$('#lmResult').textContent='';const c=$('#lmContent');c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');c.innerHTML=`<div class="lm-joke">${r.html}<div class="lm-actions-inner">${likedButton()}${nextButton()}</div></div>`;bindActions()}
function finish(){confetti();$('#lmArena').classList.remove('active');$('#lmWin').classList.add('show');$('#lmScore').textContent=`خلصنا ${rounds.length} نكتة… وإذا ضحكتي مرة وحدة، المهمة نجحت ❤️`}
window.startLaughMission=()=>{started=true;i=0;score=0;$('#lmStart').style.display='none';$('#lmArena').classList.add('active');render()};
window.nextLaugh=()=>{if(!started)return;i++;if(i>=rounds.length)finish();else render()};
window.restartLaugh=()=>{$('#lmWin').classList.remove('show');$('#lmArena').classList.remove('active');$('#lmStart').style.display='flex';started=false};
})();
