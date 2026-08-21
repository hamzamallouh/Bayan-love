const duas=[
'اللهم احفظ بيان بعينك التي لا تنام، واملأ أيامها سكينةً وطمأنينة، وابعد عنها كل ما يؤذي قلبها.',
'اللهم ارزق بيان فرحًا لا ينقطع، وأيامًا جميلة، وقلبًا مطمئنًا، ونورًا يرافقها في كل خطوة.',
'اللهم اجعل لبيان في كل طريق خيرًا، وفي كل اختيار توفيقًا، وفي كل أمنية نصيبًا جميلًا.',
'اللهم اشفِ قلب بيان من كل تعب، وبدّل قلقها راحة، وحزنها فرحًا، وخوفها أمانًا.',
'اللهم بارك لبيان في عمرها ووقتها وأهلها وأحبابها، واجعل البركة والخير رفيقين لها أينما كانت.',
'اللهم افتح لبيان أبواب الخير والرزق والنجاح، واكتب لها من الأقدار أجملها ومن الأيام أطيبها.',
'اللهم احفظ ابتسامة بيان، واجعلها دائمًا سببًا للفرح في قلبها وقلوب من حولها.',
'اللهم إن كان في قلب بيان أمنية جميلة، فقرّبها إليها، وإن كان في طريقها خير، فيسّره لها وبارك لها فيه.',
'اللهم اجعل مستقبل بيان أجمل مما تتمنى، واكتب لها راحةً وسعادةً ورضا، وحقق لها ما فيه خير لها.',
'اللهم اجمع لبيان بين خير الدنيا ونعيم الآخرة، واحفظها لي، واكتب لنا أيامًا مليئة بالمودة والرحمة والبركة.'
];
let index=0;
const text=document.getElementById('duaText');
const progress=document.getElementById('progress');
const heart=document.getElementById('nextHeart');
const hint=document.getElementById('hint');
function render(){
 text.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,easing:'ease-out'});
 text.textContent=duas[index];
 progress.textContent=`الدعاء ${['١','٢','٣','٤','٥','٦','٧','٨','٩','١٠'][index]} من ١٠`;
}
function hearts(count=10){for(let i=0;i<count;i++){const h=document.createElement('span');h.className='float-heart';h.textContent=['❤️','💗','💖','💕'][Math.floor(Math.random()*4)];h.style.left=(10+Math.random()*80)+'vw';h.style.top=(70+Math.random()*20)+'vh';h.style.fontSize=(14+Math.random()*20)+'px';h.style.animationDelay=(Math.random()*.5)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),3000)}}
function next(){
 if(index<duas.length-1){index++;render();hearts(5);return}
 document.getElementById('duaCard').classList.add('done');
 text.innerHTML='❤️ بحبك بيان ❤️<br><small style="font-family:system-ui;font-size:.55em;color:rgba(255,255,255,.7)">الله يحفظك ويسعد قلبك دائمًا</small>';
 progress.textContent='خلصت الدعوات العشر 🤍';
 hint.textContent='هاي آخر صفحة… خلي القلب يحفظها ❤️';
 heart.animate([{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],{duration:700});
 hearts(35);
}
heart.addEventListener('click',next);heart.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')next()});
render();
