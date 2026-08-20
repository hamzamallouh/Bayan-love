(()=>{
const poem=`يا بَيانُ، يا نَغَمًا في الرُّوحِ مُنْسَكِبًا
يا بَدرَ حُسنٍ على أيّاميَ انْسَكَبَا

عجزتُ عن وصفِ حُسنٍ أنتِ مَنبَعُهُ
فكيفَ يَبلغُهُ شِعرٌ إذا كُتِبَا؟

إذا تبسَّمَ ثغرُكِ أشرقتْ مُدُني
وصارَ ليلُ الأسى من نورِكِ ذَهَبَا

وإنْ تكلَّمتِ، أنصتَ الحُسنُ مندهشًا
كأنَّما صاغَ ربُّ الحُسنِ ما نَطَقَا

وإنْ مشيتِ، تهادى الوردُ في خَجَلٍ
كأنَّهُ حينَ لاقاكِ استحى طَرَبَا

وما أنا الشاعرُ الذي جئتُ أمدحُها
لكنَّ قلبيَ من فرطِ الهوى كُتِبَا

لو أنَّ أهلَ القوافي كلَّهم اجتمعوا
ما أدركوا من جميلِ الحسنِ ما وَجَبَا

فأنتِ فوقَ كلامِ الناسِ منزلةً
وفوقَ ما خطَّهُ أهلُ الهوى كُتُبَا

يا بيونُ، يا فرحًا في القلبِ إن حضرتْ
أيامُ عمري، فصارَ الحزنُ مُنْسَحِبَا

يا بيونتي، ويا سرًّا ألوذُ بهِ
إذا تعبتُ، وجدتُ القربَ مُرْتَقَبَا

يا عسولتي، ويا حلوَ الحياةِ إذا
مرَّتْ حروفُكِ، صارَ القولُ مُسْتَعْذَبَا

ويا قلبوشتي، يا نبضًا أعيشُ بهِ
إن كانَ للقلبِ بيتٌ، كنتِ لي السَّبَبَا

أنتِ حياتي، وما للحُبِّ من وطنٍ
إلّا فؤادٌ رأى في حبِّكِ الطَّلَبَا

وأنتِ روحي، فإن فارقتِ موضعَها
ضاقَتْ عليَّ رحابُ الأرضِ والرُّحَبَا

وأنتِ قلبي، وفي قلبي لكِ وطنٌ
ما مسَّهُ الدهرُ يومًا أو لهُ ذَهَبَا

وأنتِ عمري، وما عمري سوى زمنٍ
أهديتُهُ لكِ، فاستحلى بكِ العَجَبَا

إنْ كانَ للشعرِ معنىً في محبتِنا
فاسمُكِ أوّلُ ما في الشعرِ قد كُتِبَا

وإنْ كانَ للحبِّ عهدٌ لا انقضاءَ لهُ
فعهدُ قلبي لكِ ما خانَ أو كَذَبَا

فابقي لقلبي كما كنتِ التي سكنتْ
فيه، وصارتْ لهُ روحًا لهُ وقَلْبَا

يا بيانُ، إنّي وإنْ طالَتْ قصيدتُنا
ما قلتُ نصفَ الذي في مهجتي وَجَبَا

فكلُّ بيتٍ كتبتُهُ في محبتِكِ
أراهُ دونَ الذي في القلبِ قد وَجَبَا

وإنْ عجزتُ، فحسبي أن أقولَ لكِ
أحبُّكِ… والحبُّ أصدقُ ما كُتِبَا ❤️`;
const style=document.createElement('style');style.textContent=`#poemCity.screen{position:fixed;inset:0;z-index:99990;display:none;overflow-y:auto;background:radial-gradient(circle at 50% 0%,#ffedf3 0,#ffd5e2 28%,#f79ab8 63%,#b5124f 100%);padding:12px;box-sizing:border-box}#poemCity.screen.active{display:block;animation:poemIn .5s ease}#poemCity.screen:before,#poemCity.screen:after{position:fixed;pointer-events:none;z-index:0;color:#b5124f;font-size:90px;opacity:.18}#poemCity.screen:before{content:'♥  ♥  ♥';top:45px;left:12px;transform:rotate(-12deg);letter-spacing:8px}#poemCity.screen:after{content:'♥  ♥  ♥';bottom:35px;right:8px;transform:rotate(12deg);letter-spacing:8px}#poemCity .poemCard{position:relative;z-index:1;min-height:calc(100vh - 24px);max-width:900px!important;margin:auto;box-sizing:border-box;padding:78px 20px 48px!important;border:2px solid rgba(255,255,255,.65);border-radius:38px;background:linear-gradient(145deg,rgba(255,255,255,.94),rgba(255,238,245,.88))!important;backdrop-filter:blur(16px);box-shadow:0 25px 90px rgba(91,0,35,.38),0 0 35px rgba(255,255,255,.28),inset 0 0 35px rgba(232,45,102,.08);display:flex;flex-direction:column;justify-content:center}#poemCity .poemBack{position:absolute;top:17px;right:17px;border:2px solid #e15b88;border-radius:20px;padding:10px 17px;background:#fff;color:#a20d47;font-size:16px;font-weight:800;box-shadow:0 7px 22px rgba(145,0,55,.18)}#poemCity .poemIcon{text-align:center;font-size:48px;margin-bottom:1px;filter:drop-shadow(0 5px 9px rgba(175,0,55,.3))}#poemCity h2{text-align:center;color:#a20d47;font-size:clamp(30px,7vw,48px);margin:3px 0 4px;font-weight:900;text-shadow:0 3px 12px rgba(170,0,60,.16)}#poemCity .poemSub{text-align:center;color:#d12f68;margin:0 0 25px;font-size:18px;font-weight:700}#poemCity .poemText{white-space:pre-line;text-align:center;color:#681333;font-size:clamp(19px,4.3vw,29px);line-height:2.15;font-weight:600;text-shadow:0 1px 1px #fff}#poemCity .poemText::after{content:'♥  ❤️  ♥  ❤️  ♥';display:block;color:#d31355;font-size:22px;letter-spacing:4px;margin-top:22px;animation:heartBeat 1.8s infinite}#poemCity .poemCard:after{content:'♡  ♥  ♡  ♥  ♡';position:absolute;bottom:10px;left:0;right:0;text-align:center;color:#e24b7d;font-size:19px;letter-spacing:7px;opacity:.7}@keyframes poemIn{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}@keyframes heartBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}@media(max-width:600px){#poemCity .poemCard{padding:68px 16px 42px!important;border-radius:29px}#poemCity .poemText{font-size:20px;line-height:2.08}#poemCity .poemBack{padding:9px 14px}}`;document.head.appendChild(style);
function openPoem(){let page=document.getElementById('poemCity');if(!page){page=document.createElement('section');page.id='poemCity';page.className='screen';page.innerHTML='<div class="poemCard"><button class="poemBack" type="button">↩️ رجوع</button><div class="poemIcon">🌹❤️🌹</div><h2>مدينة الشعر</h2><p class="poemSub">إلى بيان ❤️</p><div class="poemText"></div></div>';document.body.appendChild(page);page.querySelector('.poemText').textContent=poem;page.querySelector('.poemBack').onclick=()=>{page.classList.remove('active');document.getElementById('start')?.classList.add('active');window.scrollTo(0,0)}}document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));page.classList.add('active');window.scrollTo(0,0)}
function addButton(){if(document.querySelector('.poemCityHome'))return;const host=document.querySelector('#start .choices');if(!host)return;const b=document.createElement('button');b.className='tile poemCityHome';b.innerHTML='<span>📖</span><b>مدينة الشعر</b>';b.onclick=openPoem;host.appendChild(b)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addButton);else addButton();
})();