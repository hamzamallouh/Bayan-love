(()=>{
const rounds=[
{type:'joke',title:'😂 نبدأ من الواقع',html:'واحد راح للدكتور وقاله: «دكتور، كل ما أشرب قهوة عيني بتوجعني.»<br>الدكتور فكر شوي وقاله: <b>«جرب تشيل الملعقة من الفنجان قبل ما تشرب.»</b> 😂'},
{type:'joke',title:'📱 لما تقول آخر فيديو',html:'حمزة: «بس آخر فيديو وبنام.»<br>الخوارزمية: <b>عندي فيديو واحد لازم تشوفه.</b><br>بعد ساعة ونص: حمزة يتابع واحد في اليابان يصلّح ساعة عمرها 300 سنة. 😭😂'},
{type:'choice',title:'👀 اختبار «ما في شي»',question:'بيان قالت: «ما في شي.» وبعدها سكتت شوي… شو أفضل تصرف؟',choices:['«تمام» وأنام 😴','«أكيد؟» وأعطيها مجال تحكي ❤️','أرسل لجنة تحقيق رسمية 🚨'],answer:1,success:'صح 😂 اسأل بلطف، مش كل «ما في شي» معناها بدها تشرح كل شي.'},
{type:'joke',title:'🛒 مهمة بسيطة',html:'دخل واحد السوبرماركت عشان يشتري <b>حليب بس.</b><br>طلع بكيسين، شامبو، بطاطا، شوكولاتة، مناديل، وشاحن.<br>وقف عند الباب وقال: <b>«الحمد لله… الحليب ما نسيته.»</b> 😂'},
{type:'joke',title:'🧠 العقل الساعة 2 بالليل',html:'أنا الساعة 2 بالليل: «لازم أنام.»<br>عقلي: <b>«موافق، بس قبل النوم… ليش اسم الأربعاء مش أربعة؟»</b><br>أنا: «مش وقته.»<br>عقلي: <b>«هسا صار وقته.»</b> 😭😂'},
{type:'choice',title:'😂 محكمة الحياة',question:'حمزة قال: «دقيقتين وبكون جاهز.» شو الترجمة الرسمية؟',choices:['دقيقتين فعلًا ⏱️','ربع ساعة تقريبًا 😌','نفتح موضوع ثاني وننسى السؤال 😂'],answer:1,success:'😂 بالضبط… «دقيقتين» وحدة قياس مرنة جدًا.'},
{type:'joke',title:'🍕 قرار مصيري',html:'واحد سأل صاحبه: «شو بدك تاكل؟»<br>قاله: «أي شي.»<br>قاله: «بيتزا؟»<br>قاله: «لا.»<br>«برغر؟» — «لا.»<br>«طيب شو يعني أي شي؟»<br><b>«مش هاي الأشياء.»</b> 😂'},
{type:'choice',title:'❤️ السؤال المستحيل',question:'مين أحلى؟',choices:['بيان 🌷','بيان ❤️','ليش بتسأل سؤال إجابته معروفة؟ 😂'],answer:2,success:'😂 أخيرًا جواب منطقي. السؤال نفسه كان فخ.'},
{type:'joke',title:'🛌 خطة النوم',html:'أنا: «اليوم رح أنام بكير.»<br>أنا بعد خمس دقائق: «بس خليني أشيك الساعة.»<br>أنا بعد ساعة: «غريب… كيف وصلت لهالفيديو عن حياة البطاريق؟» 😭😂'},
{type:'joke',title:'🚗 الراكب الذكي',html:'واحد ركب تكسي وقال للسائق: «على المطار، بس لا تستعجل.»<br>السائق قال: «ولا يهمك.»<br>بعد شوي سأله: «مستعجل؟»<br>قاله: <b>«لا، بس إذا وصلنا قبل الطيارة بكون أحسن.»</b> 😂'},
{type:'choice',title:'😈 آخر اختبار',question:'إذا ضحكتي فعلًا… مين فاز؟',choices:['بيان لأنها ضحكت ❤️','حمزة لأنه نجح بالمهمة 😂','الدنيا كلها لأنها نورت ✨'],answer:2,success:'😂❤️ هاي الإجابة الرسمية: الدنيا كلها نورت.'},
{type:'joke',title:'🏆 الضربة الأخيرة',html:'أكثر جملة كذبت على أنفسنا فيها كلنا:<br><br><b>«رح أفتح التلفون بس أشوف الساعة.»</b><br><br>بعد 47 دقيقة: تعرفنا على حياة شخص ما منعرفه، وشوفنا وصفة أكلة ما رح نطبخها، ولسا ما عرفنا الساعة. 😂'}
];
let i=0,score=0,started=false;
const $=s=>document.querySelector(s);
function laugh(){const a=new Audio(encodeURI('ضحكة.mp3'));a.preload='auto';a.volume=.9;a.currentTime=0;a.play().catch(()=>{});confetti();}
window.playLaughSound=laugh;
function confetti(){for(let n=0;n<18;n++){const e=document.createElement('span');e.className='lm-confetti';e.textContent=['😂','❤️','💗','✨','🤣'][n%5];e.style.left='50vw';e.style.top='52vh';e.style.setProperty('--x',`${Math.random()*420-210}px`);e.style.setProperty('--y',`${Math.random()*420-210}px`);document.body.appendChild(e);setTimeout(()=>e.remove(),1200)}}
function float(){const e=document.createElement('span');e.className='lm-float';e.textContent=['😂','🤣','❤️','💗','✨','😌'][Math.floor(Math.random()*6)];e.style.left=Math.random()*100+'vw';e.style.setProperty('--x',(Math.random()*180-90)+'px');e.style.animationDuration=(7+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),13000)}
setInterval(float,1100);for(let n=0;n<6;n++)setTimeout(float,n*450);
function likedButton(){return `<button class="lm-btn" id="lmLiked">😂 ضحكتني! شغّلي الضحكة</button>`}
function nextButton(){return `<button class="lm-btn alt" id="lmNextBtn">➡️ اللي بعدها</button>`}
function render(){const r=rounds[i];$('#lmCounter').textContent=`${i+1} / ${rounds.length}`;$('#lmTitle').textContent=r.title;$('#lmResult').textContent='';const c=$('#lmContent');c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');
if(r.type==='choice'){
 c.innerHTML=`<div class="lm-choice"><div class="lm-joke">${r.question}</div>${r.choices.map((x,k)=>`<button data-choice="${k}">${x}</button>`).join('')}<div id="lmAfterChoice" class="lm-after"></div></div>`;
 c.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>choose(+b.dataset.choice));
}else{
 c.innerHTML=`<div class="lm-joke">${r.html}<div class="lm-actions-inner">${likedButton()}${nextButton()}</div></div>`;
 $('#lmLiked').onclick=()=>{laugh();$('#lmResult').textContent='😂❤️ هيك بنعرف إن المهمة نجحت!'};
 $('#lmNextBtn').onclick=next;
 }
}
function choose(k){const r=rounds[i];const after=$('#lmAfterChoice');if(k===r.answer){score++;$('#lmResult').textContent=r.success;confetti()}else{$('#lmResult').textContent=['قريبة 😂 جرّبي مرة ثانية','هههه لا 😭','فكري فيها شوي 😂','جواب خطير… بس مش هو 😂'][Math.floor(Math.random()*4)];}after.innerHTML=`<div class="lm-actions-inner">${likedButton()}${nextButton()}</div>`;$('#lmLiked').onclick=()=>{laugh();$('#lmResult').textContent='😂❤️ هاي الضحكة محسوبة رسميًا!'};$('#lmNextBtn').onclick=next}
function next(){if(!started)return;i++;if(i>=rounds.length)return finish();render()}
function finish(){laugh();$('#lmArena').classList.remove('active');$('#lmWin').classList.add('show');$('#lmScore').textContent=`خلصنا ${rounds.length} تحديات، والنتيجة: ${score} إجابات صح ❤️`}
window.startLaughMission=()=>{started=true;i=0;score=0;$('#lmStart').style.display='none';$('#lmArena').classList.add('active');render()};window.nextLaugh=next;window.restartLaugh=()=>{$('#lmWin').classList.remove('show');$('#lmArena').classList.remove('active');$('#lmStart').style.display='flex';started=false};
})();
