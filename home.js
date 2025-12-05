/* =========================================
   1. TRANSLATION DATA
   ========================================= */
const translations = {
    ar: {
        loading: "جاري فتح البوابة...",
        logo: "مصر القديمة",
        title: "مـصـر",
        subtitle: "حـضـارة الـخـلـود",
        cta: "ابدأ الرحلة",
        relic_label: "أثر اليوم",
        relic_name: "قناع توت عنخ آمون",
        relic_desc: "تم اكتشافه عام 1922، ويُعد الرمز الأشهر والأنقى للحضارة المصرية القديمة.",
    },
    en: {
        loading: "Opening the Portal...",
        logo: "Ancient Egypt",
        title: "EGYPT",
        subtitle: "Civilization of the Future",
        cta: "Start Expedition",
        relic_label: "Relic of the Day",
        relic_name: "Mask of Tutankhamun",
        relic_desc: "Discovered in 1922, this golden death mask is the most famous symbol of ancient Egypt.",
    }
};

/* =========================================
   2. LANGUAGE SWITCHER LOGIC
   ========================================= */
let currentLang = 'ar';
const langAr = document.getElementById('lang-ar');
const langEn = document.getElementById('lang-en');
const body = document.body;
const html = document.documentElement;

function updateTexts(lang) {
    // General Text Update
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    
    // Specific Update for Timeline Text (Bottom)
    const activeDot = document.querySelector('.timeline-dot.active');
    const timelineText = document.getElementById('timelineText');
    if(activeDot) {
        if(lang === 'en') {
            timelineText.innerText = activeDot.getAttribute('data-text-en');
        } else {
            timelineText.innerText = activeDot.getAttribute('data-text');
        }
    }
}

// Switch to English
langEn.addEventListener('click', () => {
    if (currentLang === 'en') return;
    currentLang = 'en';
    
    body.classList.add('english-mode');
    html.setAttribute('dir', 'ltr');
    
    langEn.classList.add('active');
    langAr.classList.remove('active');
    
    updateTexts('en');
});

// Switch to Arabic
langAr.addEventListener('click', () => {
    if (currentLang === 'ar') return;
    currentLang = 'ar';
    
    body.classList.remove('english-mode');
    html.setAttribute('dir', 'rtl');
    
    langAr.classList.add('active');
    langEn.classList.remove('active');
    
    updateTexts('ar');
});

/* =========================================
   3. TIMELINE INTERACTION
   ========================================= */
const dots = document.querySelectorAll('.timeline-dot');
const infoText = document.getElementById('timelineText');

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        // Remove active class from all dots
        dots.forEach(d => d.classList.remove('active'));
        // Add to clicked dot
        this.classList.add('active');
        
        // Fade text out
        infoText.style.opacity = 0;
        
        // Change text after small delay
        setTimeout(() => {
            if (currentLang === 'en') {
                infoText.innerText = this.getAttribute('data-text-en');
            } else {
                infoText.innerText = this.getAttribute('data-text');
            }
            // Fade text back in
            infoText.style.opacity = 1;
        }, 300);
    });
});

// Fade in the initial text on load
setTimeout(() => {
    if(infoText) infoText.classList.add('fade-in');
}, 500);

/* =========================================
   4. LOADER & PAGE TRANSITION
   ========================================= */
const preloader = document.getElementById('preloader');

// Hide loader on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2000); // 2 second delay before revealing site
});

// Show loader when clicking "Start Expedition"
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    const link = this.getAttribute('href'); 

    preloader.style.display = 'flex';
    // Small delay to allow display:flex to apply before opacity
    setTimeout(() => {
        preloader.style.opacity = '1';
    }, 10);

    // Wait 3 seconds then go to map
    setTimeout(() => {
        window.location.href = link;
    }, 3000); 
});

/* =========================================
   5. PARALLAX BACKGROUND EFFECT
   ========================================= */
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    const bg = document.querySelector('.bg-container');
    if(bg) {
        bg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    }
});

/* =========================================
   6. GOLDEN SAND CURSOR TRAIL (FIXED)
   ========================================= */
// Create container for sand particles
const cursorContainer = document.createElement('div');
cursorContainer.style.position = 'fixed';
cursorContainer.style.top = '0';
cursorContainer.style.left = '0';
cursorContainer.style.width = '100%';
cursorContainer.style.height = '100%';
cursorContainer.style.pointerEvents = 'none'; // Crucial so clicks go through
cursorContainer.style.zIndex = '9999';
document.body.appendChild(cursorContainer);

document.addEventListener('mousemove', function(e) {
    createSand(e.clientX, e.clientY);
});

function createSand(x, y) {
    const sand = document.createElement('div');
    sand.style.position = 'absolute';
    sand.style.left = x + 'px';
    sand.style.top = y + 'px';
    sand.style.width = Math.random() * 4 + 2 + 'px'; // Random size between 2px and 6px
    sand.style.height = sand.style.width;
    sand.style.background = '#D4AF37'; // Gold color
    sand.style.borderRadius = '50%';
    sand.style.boxShadow = '0 0 6px #D4AF37'; // Glow effect
    sand.style.transition = 'all 1s ease';
    sand.style.opacity = '1';
    
    cursorContainer.appendChild(sand);
    
    // Animate the sand falling down
    setTimeout(() => {
        sand.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 30 + 30}px)`;
        sand.style.opacity = '0';
    }, 10);
    
    // Remove from DOM
    setTimeout(() => {
        sand.remove();
    }, 1000);
}
