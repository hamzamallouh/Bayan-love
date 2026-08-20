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
const style=document.createElement('style');style.textContent=`#poemCity.screen{position:fixed;inset:0;z-index:99990;display:none;overflow-y:auto;background:linear-gradient(145deg,#fff8fb,#fdeaf2,#f8dce8);padding:10px;box-sizing:border-box}#poemCity.screen.active{display:block;animation:poemIn .35s ease}#poemCity .poemCard{position:relative;min-height:calc(100vh - 20px);max-width:900px!important;margin:auto;box-sizing:border-box;padding:65px 20px 40px!important;border-radius:28px;background:rgba(255,255,255,.9)!important;box-shadow:0 20px 70px rgba(110,30,70,.15);display:flex;flex-direction:column;justify-content:center}#poemCity .poemBack{position:absolute;top:16px;right:16px;border:0;border-radius:15px;padding:10px 17px;background:#fff;color:#8b315e;font-size:16px;font-weight:700;box-shadow:0 5px 18px rgba(100,30,70,.12)}#poemCity .poemIcon{text-align:center;font-size:40px}#poemCity h2{text-align:center;color:#8c315c;font-size:clamp(27px,7vw,43px);margin:5px 0 8px}#poemCity .poemSub{text-align:center;color:#a45c7b;margin:0 0 25px}#poemCity .poemText{white-space:pre-line;text-align:center;color:#56243d;font-size:clamp(19px,4.3vw,29px);line-height:2.15;font-weight:500}#poemCity .poemText::first-letter{color:#b31f62}@keyframes poemIn{from{opacity:0}to{opacity:1}}`;document.head.appendChild(style);
function openPoem(){let page=document.getElementById('poemCity');if(!page){page=document.createElement('section');page.id='poemCity';page.className='screen';page.innerHTML='<div class="poemCard"><button class="poemBack" type="button">↩️ رجوع</button><div class="poemIcon">🌹</div><h2>مدينة الشعر</h2><p class="poemSub">إلى بيان ❤️</p><div class="poemText"></div></div>';document.body.appendChild(page);page.querySelector('.poemText').textContent=poem;page.querySelector('.poemBack').onclick=()=>{page.classList.remove('active');document.getElementById('start')?.classList.add('active');window.scrollTo(0,0)}}document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));page.classList.add('active');window.scrollTo(0,0)}
function addButton(){if(document.querySelector('.poemCityHome'))return;const host=document.querySelector('#start .choices');if(!host)return;const b=document.createElement('button');b.className='tile poemCityHome';b.innerHTML='<span>📖</span><b>مدينة الشعر</b>';b.onclick=openPoem;host.appendChild(b)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addButton);else addButton();
})();