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
const style=document.createElement('style');style.textContent=`#poemCity.screen{position:fixed;inset:0;z-index:99990;display:none;overflow-y:auto;background:radial-gradient(circle at 50% 8%,#fff 0,#fff5f9 24%,#fbdce9 58%,#edb9d0 100%);padding:10px;box-sizing:border-box}#poemCity.screen.active{display:block;animation:poemIn .5s ease}#poemCity.screen:before,#poemCity.screen:after{content:'🌸';position:fixed;opacity:.16;font-size:80px;pointer-events:none}#poemCity.screen:before{top:45px;left:20px;transform:rotate(-20deg)}#poemCity.screen:after{bottom:40px;right:20px;transform:rotate(20deg)}#poemCity .poemCard{position:relative;min-height:calc(100vh - 20px);max-width:900px!important;margin:auto;box-sizing:border-box;padding:72px 20px 45px!important;border:1px solid rgba(190,70,120,.2);border-radius:34px;background:rgba(255,255,255,.78)!important;backdrop-filter:blur(14px);box-shadow:0 25px 80px rgba(120,35,80,.18),inset 0 0 40px rgba(255,180,210,.12);display:flex;flex-direction:column;justify-content:center}#poemCity .poemBack{position:absolute;top:17px;right:17px;border:1px solid rgba(160,55,100,.15);border-radius:18px;padding:10px 17px;background:rgba(255,255,255,.9);color:#8b315e;font-size:16px;font-weight:700;box-shadow:0 6px 20px rgba(100,30,70,.1)}#poemCity .poemIcon{text-align:center;font-size:44px;margin-bottom:2px;filter:drop-shadow(0 4px 8px rgba(180,50,100,.18))}#poemCity h2{text-align:center;color:#9b315f;font-size:clamp(29px,7vw,46px);margin:4px 0 7px;font-weight:800;text-shadow:0 2px 12px rgba(180,55,105,.12)}#poemCity .poemSub{text-align:center;color:#b05b7e;margin:0 0 27px;font-size:17px}#poemCity .poemText{white-space:pre-line;text-align:center;color:#54243d;font-size:clamp(19px,4.3vw,29px);line-height:2.15;font-weight:500;text-shadow:0 1px 1px #fff}#poemCity .poemText::after{content:'♥  ♥  ♥';display:block;color:#c84c7d;font-size:20px;letter-spacing:5px;margin-top:22px}@keyframes poemIn{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}@media(max-width:600px){#poemCity .poemCard{padding:68px 16px 34px!important;border-radius:27px}#poemCity .poemText{font-size:20px;line-height:2.08}#poemCity .poemBack{padding:9px 14px}}`;document.head.appendChild(style);
function openPoem(){let page=document.getElementById('poemCity');if(!page){page=document.createElement('section');page.id='poemCity';page.className='screen';page.innerHTML='<div class="poemCard"><button class="poemBack" type="button">↩️ رجوع</button><div class="poemIcon">🌹</div><h2>مدينة الشعر</h2><p class="poemSub">إلى بيان ❤️</p><div class="poemText"></div></div>';document.body.appendChild(page);page.querySelector('.poemText').textContent=poem;page.querySelector('.poemBack').onclick=()=>{page.classList.remove('active');document.getElementById('start')?.classList.add('active');window.scrollTo(0,0)}}document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));page.classList.add('active');window.scrollTo(0,0)}
function addButton(){if(document.querySelector('.poemCityHome'))return;const host=document.querySelector('#start .choices');if(!host)return;const b=document.createElement('button');b.className='tile poemCityHome';b.innerHTML='<span>📖</span><b>مدينة الشعر</b>';b.onclick=openPoem;host.appendChild(b)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addButton);else addButton();
})();