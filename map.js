/* =========================================
   MEGA DATABASE (30 CITIES - FINAL COMPLETE VERSION)
   ========================================= */
const mapData = [
    // --- 1. GREATER CAIRO & RELIGIOUS COMPLEX ---
    {
        id: "cairo", type: "history", icon: "fa-gopuram",
        coords: { x: 300, y: 180 },
        content: {
            ar: { title: "القاهرة الكبرى", desc: "العاصمة، مجمع الأديان وعجائب الدنيا." },
            en: { title: "Greater Cairo", desc: "The Capital, Religious Complex & Wonders." }
        },
        sites: [
            // Ancient Egypt
            { img: "pyramids.jpg", ar: { name: "أهرامات الجيزة", desc: "عجيبة الدنيا الباقية." }, en: { name: "Giza Pyramids", desc: "Surviving Wonder." }},
            { img: "sphinx.jpg", ar: { name: "أبو الهول", desc: "الحارس الأسطوري." }, en: { name: "The Sphinx", desc: "Legendary Guardian." } },
            { img: "gem.jpg", ar: { name: "المتحف الكبير", desc: "أكبر متحف في العالم." }, en: { name: "Grand Egyptian Museum", desc: "World's Largest Museum." } },
            // Coptic Cairo (ADDED)
            { img: "hangingchurch.jpg", ar: { name: "الكنيسة المعلقة", desc: "أيقونة القبطية المصرية." }, en: { name: "Hanging Church", desc: "Icon of Coptic Egypt." } },
            { img: "abuserga.jpg", ar: { name: "كنيسة أبي سرجة", desc: "مغارة العائلة المقدسة." }, en: { name: "Abu Serga Church", desc: "Holy Family Cave." } },
            { img: "cavechurch.jpg", ar: { name: "دير القديس سمعان", desc: "كنيسة الكهف بالمقطم." }, en: { name: "Cave Church", desc: "St. Simon Monastery." } },
            // Islamic Cairo
            { img: "citadel.jpg", ar: { name: "القلعة", desc: "قلعة صلاح الدين." }, en: { name: "The Citadel", desc: "Saladin Citadel." } },
            { img: "moez.jpg", ar: { name: "شارع المعز", desc: "متحف إسلامي مفتوح." }, en: { name: "Moez Street", desc: "Open Islamic Museum." } }
        ]
    },

    // --- 2. THE DELTA & ROSETTA ---
    {
        id: "alexandria", type: "sea", icon: "fa-water",
        coords: { x: 180, y: 80 },
        content: {
            ar: { title: "الإسكندرية", desc: "عروس البحر المتوسط." },
            en: { title: "Alexandria", desc: "Pearl of the Mediterranean." }
        },
        sites: [
            { img: "library.jpg", ar: { name: "مكتبة الإسكندرية", desc: "منارة الثقافة." }, en: { name: "Bibliotheca", desc: "Cultural Beacon." } },
            { img: "qaitbay.jpg", ar: { name: "قلعة قايتباي", desc: "حصن تاريخي." }, en: { name: "Qaitbay Citadel", desc: "Historic Fort." } },
            { img: "montaza.jpg", ar: { name: "المنتزه", desc: "الحدائق الملكية." }, en: { name: "Montaza", desc: "Royal Gardens." } }
        ]
    },
    {
        id: "rashid", type: "history", icon: "fa-book-open",
        coords: { x: 220, y: 60 },
        content: {
            ar: { title: "رشيد", desc: "مدينة حجر رشيد والمنازل التراثية." },
            en: { title: "Rosetta (Rashid)", desc: "Rosetta Stone & Heritage Houses." }
        },
        sites: [
            { img: "rashidmuseum.jpg", ar: { name: "متحف رشيد", desc: "العمارة الإسلامية." }, en: { name: "Rosetta Museum", desc: "Islamic Architecture." } },
            { img: "nilemouth.jpg", ar: { name: "مصب النيل", desc: "التقاء النهر بالبحر." }, en: { name: "Nile Mouth", desc: "River meets Sea." } }
        ]
    },
    {
        id: "tanis", type: "history", icon: "fa-cube",
        coords: { x: 330, y: 100 },
        content: {
            ar: { title: "صان الحجر", desc: "تانيس، عاصمة الفراعنة في الشرقية." },
            en: { title: "Tanis (San El Hagar)", desc: "Lost Capital of Tanis." }
        },
        sites: [
            { img: "tanisruins.jpg", ar: { name: "آثار تانيس", desc: "طيبه الشمال." }, en: { name: "Tanis Ruins", desc: "Thebes of the North." } }
        ]
    },
    {
        id: "mansoura", type: "nature", icon: "fa-notes-medical",
        coords: { x: 310, y: 110 },
        content: {
            ar: { title: "المنصورة", desc: "عروس الدلتا ودار ابن لقمان." },
            en: { title: "Mansoura", desc: "Bride of the Delta." }
        },
        sites: [
             { img: "ibnloqman.jpg", ar: { name: "دار ابن لقمان", desc: "متحف لويس التاسع." }, en: { name: "Ibn Loqman House", desc: "Louis IX Museum." } }
        ]
    },

    // --- 3. THE CANAL CITIES ---
    {
        id: "portsaid", type: "sea", icon: "fa-ship",
        coords: { x: 360, y: 70 },
        content: {
            ar: { title: "بورسعيد", desc: "المدينة الباسلة." },
            en: { title: "Port Said", desc: "The Valiant City." }
        },
        sites: [
            { img: "portfauad.jpg", ar: { name: "بورفؤاد", desc: "الطراز الفرنسي." }, en: { name: "Port Fouad", desc: "French Style." } }
        ]
    },
    {
        id: "ismailia", type: "nature", icon: "fa-leaf",
        coords: { x: 350, y: 130 },
        content: {
            ar: { title: "الإسماعيلية", desc: "مدينة الحدائق." },
            en: { title: "Ismailia", desc: "City of Gardens." }
        },
        sites: [
            { img: "timsah.jpg", ar: { name: "بحيرة التمساح", desc: "هدوء ونقاء." }, en: { name: "Lake Timsah", desc: "Calm water." } }
        ]
    },
    {
        id: "suez", type: "history", icon: "fa-industry",
        coords: { x: 360, y: 170 },
        content: {
            ar: { title: "السويس", desc: "مدخل القناة الجنوبي." },
            en: { title: "Suez", desc: "Canal South Entrance." }
        },
        sites: [
             { img: "greenisland.jpg", ar: { name: "الجزيرة الخضراء", desc: "حصن منيع." }, en: { name: "Green Island", desc: "Fortress." } }
        ]
    },

    // --- 4. MIDDLE EGYPT & WESTERN DESERT ---
    {
        id: "fayoum", type: "nature", icon: "fa-tree",
        coords: { x: 270, y: 210 },
        content: {
            ar: { title: "الفيوم", desc: "مصر الصغرى والشلالات." },
            en: { title: "Fayoum", desc: "Little Egypt & Waterfalls." }
        },
        sites: [
             { img: "wadirayan.jpg", ar: { name: "وادي الريان", desc: "الشلالات." }, en: { name: "Wadi El Rayan", desc: "Waterfalls." } },
             { img: "whales.jpg", ar: { name: "وادي الحيتان", desc: "متحف الحفريات." }, en: { name: "Whale Valley", desc: "Fossil Museum." } }
        ]
    },
    {
        id: "minya", type: "history", icon: "fa-scroll",
        coords: { x: 280, y: 290 },
        content: {
            ar: { title: "المنيا", desc: "عروس الصعيد وتل العمارنة." },
            en: { title: "Minya", desc: "Bride of Upper Egypt." }
        },
        sites: [
             { img: "amarna.jpg", ar: { name: "تل العمارنة", desc: "عاصمة إخناتون." }, en: { name: "Amarna", desc: "Akhenaten capital." } },
             { img: "beni.jpg", ar: { name: "بني حسن", desc: "مقابر منحوتة." }, en: { name: "Beni Hasan", desc: "Rock tombs." } }
        ]
    },
    {
        id: "whitedesert", type: "oasis", icon: "fa-wind",
        coords: { x: 180, y: 250 },
        content: {
            ar: { title: "الصحراء البيضاء", desc: "الواحات البحرية والفرافرة." },
            en: { title: "White Desert", desc: "Bahariya & Farafra Oases." }
        },
        sites: [
             { img: "mushrooms.jpg", ar: { name: "الصخور الطباشيرية", desc: "أشكال المشروم." }, en: { name: "Chalk Rocks", desc: "Mushroom formations." } },
             { img: "blackdesert.jpg", ar: { name: "الصحراء السوداء", desc: "جبال بركانية." }, en: { name: "Black Desert", desc: "Volcanic Mountains." } }
        ]
    },
    {
        id: "assiut", type: "history", icon: "fa-church",
        coords: { x: 290, y: 340 },
        content: {
            ar: { title: "أسيوط", desc: "مسار العائلة المقدسة." },
            en: { title: "Assiut", desc: "Holy Family path." }
        },
        sites: [
            { img: "durunka.jpg", ar: { name: "دير درنكة", desc: "مغارة العذراء." }, en: { name: "Durunka Monastery", desc: "Virgin Mary Cave." } },
            { img: "muharraq.jpg", ar: { name: "الدير المحرق", desc: "القدس الثانية." }, en: { name: "Muharraq Monastery", desc: "Second Jerusalem." } }
        ]
    },
    {
        id: "sohag", type: "history", icon: "fa-place-of-worship",
        coords: { x: 300, y: 380 },
        content: {
            ar: { title: "سوهـاج", desc: "أرض المعابد (أبيدوس)." },
            en: { title: "Sohag", desc: "Land of Temples (Abydos)." }
        },
        sites: [
            { img: "abydos.jpg", ar: { name: "معبد أبيدوس", desc: "أجمل نقوش في مصر." }, en: { name: "Abydos Temple", desc: "Best reliefs in Egypt." } },
            { img: "redmonastery.jpg", ar: { name: "الدير الأحمر", desc: "تحفة قبطية." }, en: { name: "Red Monastery", desc: "Coptic masterpiece." } }
        ]
    },

    // --- 5. UPPER EGYPT ---
    {
        id: "qena", type: "history", icon: "fa-gopuram",
        coords: { x: 315, y: 420 },
        content: {
            ar: { title: "قـنا", desc: "معبد دندرة الجميل." },
            en: { title: "Qena", desc: "Beautiful Dendera Temple." }
        },
        sites: [
            { img: "dendera.jpg", ar: { name: "معبد دندرة", desc: "معبد حتحور والألوان." }, en: { name: "Dendera Temple", desc: "Hathor Temple colors." } }
        ]
    },
    {
        id: "luxor", type: "history", icon: "fa-monument",
        coords: { x: 330, y: 450 },
        content: {
            ar: { title: "الأقصر", desc: "طيبة، عاصمة العالم القديم." },
            en: { title: "Luxor", desc: "Thebes, Ancient Capital." }
        },
        sites: [
            { img: "karnak.jpg", ar: { name: "الكرنك", desc: "أكبر مجمع ديني." }, en: { name: "Karnak", desc: "Largest complex." } },
            { img: "luxortemple.jpg", ar: { name: "معبد الأقصر", desc: "قلب المدينة." }, en: { name: "Luxor Temple", desc: "City Center." } },
            { img: "vok.jpg", ar: { name: "وادي الملوك", desc: "مقابر الملوك." }, en: { name: "Valley of Kings", desc: "Royal Tombs." } }
        ]
    },
    {
        id: "edfu", type: "history", icon: "fa-horse-head",
        coords: { x: 330, y: 500 },
        content: {
            ar: { title: "إدفو وكوم أمبو", desc: "معابد النيل الأسطورية." },
            en: { title: "Edfu & Kom Ombo", desc: "Legendary Nile Temples." }
        },
        sites: [
            { img: "edfu.jpg", ar: { name: "معبد إدفو", desc: "معبد حورس (بالحنطور)." }, en: { name: "Edfu Temple", desc: "Temple of Horus." } },
            { img: "komombo.jpg", ar: { name: "كوم أمبو", desc: "معبد التمساح." }, en: { name: "Kom Ombo", desc: "Crocodile Temple." } }
        ]
    },
    {
        id: "aswan", type: "history", icon: "fa-anchor",
        coords: { x: 330, y: 550 },
        content: {
            ar: { title: "أسوان", desc: "بلاد النوبة والمعابد الصخرية." },
            en: { title: "Aswan", desc: "Nubia & Rock Temples." }
        },
        sites: [
            { img: "philae.jpg", ar: { name: "فيلة", desc: "معبد إيزيس." }, en: { name: "Philae", desc: "Isis Temple." } },
            { img: "abusimbel.jpg", ar: { name: "أبو سمبل", desc: "معبد رمسيس." }, en: { name: "Abu Simbel", desc: "Ramses Temple." } },
            { img: "nubian.jpg", ar: { name: "القرية النوبية", desc: "تراث وألوان." }, en: { name: "Nubian Village", desc: "Heritage & Colors." } }
        ]
    },

    // --- 6. RED SEA & SINAI ---
    {
        id: "hurghada", type: "sea", icon: "fa-fish",
        coords: { x: 450, y: 280 },
        content: {
            ar: { title: "الغردقة", desc: "عاصمة البحر الأحمر." },
            en: { title: "Hurghada", desc: "Red Sea Capital." }
        },
        sites: [
            { img: "giftun.jpg", ar: { name: "الجفتون", desc: "جزر رملية." }, en: { name: "Giftun", desc: "Sandy Islands." } }
        ]
    },
    {
        id: "marsaalam", type: "sea", icon: "fa-globe-africa",
        coords: { x: 480, y: 450 },
        content: {
            ar: { title: "مرسى علم", desc: "المالديف المصرية." },
            en: { title: "Marsa Alam", desc: "Egypt's Maldives." }
        },
        sites: [
            { img: "nayzak.jpg", ar: { name: "النيزك", desc: "مسبح طبيعي." }, en: { name: "Nayzak", desc: "Natural Pool." } }
        ]
    },
    {
        id: "sharm", type: "sea", icon: "fa-umbrella-beach",
        coords: { x: 480, y: 230 },
        content: {
            ar: { title: "شرم الشيخ", desc: "مدينة السلام." },
            en: { title: "Sharm El Sheikh", desc: "City of Peace." }
        },
        sites: [
            { img: "rasmo.jpg", ar: { name: "رأس محمد", desc: "محمية مرجانية." }, en: { name: "Ras Mohammed", desc: "Coral Reserve." } }
        ]
    },
    {
        id: "dahab", type: "sea", icon: "fa-swimmer",
        coords: { x: 485, y: 200 },
        content: {
            ar: { title: "دهب", desc: "جنة الغواصين والبساطة." },
            en: { title: "Dahab", desc: "Divers' Paradise." }
        },
        sites: [
            { img: "bluehole.jpg", ar: { name: "الثقب الأزرق", desc: "موقع غوص عالمي." }, en: { name: "Blue Hole", desc: "Global Dive Site." } }
        ]
    },
    {
        id: "saint", type: "nature", icon: "fa-mountain",
        coords: { x: 460, y: 190 },
        content: {
            ar: { title: "سانت كاترين", desc: "الجبال المقدسة." },
            en: { title: "St. Catherine", desc: "Sacred Mountains." }
        },
        sites: [
            { img: "monastery.jpg", ar: { name: "الدير", desc: "أقدم الأديرة." }, en: { name: "Monastery", desc: "Oldest Monastery." } },
            { img: "mousa.jpg", ar: { name: "جبل موسى", desc: "شروق الشمس." }, en: { name: "Mt. Sinai", desc: "Sunrise Hike." } }
        ]
    },
    {
        id: "taba", type: "sea", icon: "fa-campground",
        coords: { x: 485, y: 170 },
        content: {
            ar: { title: "طابا ونويبع", desc: "مخيمات على البحر وقلعة صلاح الدين." },
            en: { title: "Taba & Nuweiba", desc: "Beach camps & Saladin Castle." }
        },
        sites: [
            { img: "castle.jpg", ar: { name: "قلعة صلاح الدين", desc: "جزيرة فرعون." }, en: { name: "Saladin Castle", desc: "Pharaoh's Island." } }
        ]
    },

    // --- 7. FAR WEST & NORTH ---
    {
        id: "siwa", type: "oasis", icon: "fa-leaf",
        coords: { x: 80, y: 150 },
        content: {
            ar: { title: "واحة سيوة", desc: "غروب الشمس والتراث الأمازيغي." },
            en: { title: "Siwa Oasis", desc: "Sunsets & Berber Heritage." }
        },
        sites: [
            { img: "shali.jpg", ar: { name: "قلعة شالي", desc: "المدينة القديمة." }, en: { name: "Shali Fortress", desc: "Old City." } },
            { img: "salt.jpg", ar: { name: "بحيرات الملح", desc: "مياه شفافة." }, en: { name: "Salt Lakes", desc: "Crystal Water." } }
        ]
    },
    {
        id: "matruh", type: "sea", icon: "fa-umbrella-beach",
        coords: { x: 100, y: 70 },
        content: {
            ar: { title: "مرسى مطروح", desc: "شواطئ المالديف المصرية." },
            en: { title: "Marsa Matruh", desc: "Egypt's Maldives." }
        },
        sites: [
            { img: "ageeba.jpg", ar: { name: "شاطئ عجيبة", desc: "تكوينات صخرية." }, en: { name: "Ageeba Beach", desc: "Rock formations." } }
        ]
    }
];
const uiTrans = {
    ar: { loading: "جاري تحميل الخريطة...", sites_title: "أماكن للزيارة", visit_now: "احجز جولة", reset_view: "العـوده", search: "بحث عن مدينة...", logo: "مصر القديمة", back: "الرئيـسيـه", filter_title:" تصنيـف"  },
    en: { loading: "Loading Map...", sites_title: "Places to Visit", visit_now: "Book Tour", reset_view: "Back", search: "Search city...", logo: "Ancient Egypt", back: "Home"  ,filter_title:" Filter" }
};

/* =========================================
   2. SYSTEM CONTROLLERS
   ========================================= */
let currentLang = 'ar';
let activeCityId = null; // Keeps track of open city

const mapLayer = document.getElementById('mapLayer');
const pinsContainer = document.getElementById('pinsContainer');
const cityPanel = document.getElementById('cityPanel');
const sitesList = document.getElementById('sitesList');
const resetBtn = document.getElementById('resetZoom');
const searchInput = document.getElementById('mapSearch');

window.addEventListener('load', () => {
    renderPins();
    setTimeout(() => { document.getElementById('preloader').style.display = 'none'; }, 1000);
});

/* =========================================
   3. RENDERING PINS
   ========================================= */
function renderPins() {
    pinsContainer.innerHTML = '';
    mapData.forEach(city => {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.setAttribute('data-id', city.id);
        pin.setAttribute('data-type', city.type);
        pin.style.left = city.coords.x + 'px';
        pin.style.top = city.coords.y + 'px';

        const title = currentLang === 'ar' ? city.content.ar.title : city.content.en.title;

        pin.innerHTML = `
            <div class="pin-pulse"></div>
            <div class="pin-icon"><i class="fas ${city.icon}"></i></div>
            <div class="pin-label">${title}</div>
        `;

        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            zoomToCity(city);
        });

        // Re-highlight if this pin was active
        if(activeCityId === city.id) {
            pin.classList.add('active');
        }

        pinsContainer.appendChild(pin);
    });
}

/* =========================================
   4. ZOOM LOCK-ON LOGIC
   ========================================= */
function zoomToCity(city) {
    activeCityId = city.id; // Track Active City
    
    const scale = 2.0;
    const deltaX = (300 - city.coords.x) * scale;
    const deltaY = (350 - city.coords.y) * scale;

    mapLayer.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
    
    document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
    document.querySelector(`.map-pin[data-id="${city.id}"]`).classList.add('active');

    openCityPanel(city);
}

resetBtn.addEventListener('click', resetMap);

function resetMap() {
    activeCityId = null; // Clear Active City
    mapLayer.style.transform = `translate(0, 0) scale(1)`;
    cityPanel.classList.remove('open');
    document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
}

/* =========================================
   5. PANEL & LIST LOGIC (FIXED)
   ========================================= */
function openCityPanel(city) {
    const content = currentLang === 'ar' ? city.content.ar : city.content.en;
    
    document.getElementById('cpTitle').innerText = content.title;
    document.getElementById('cpDesc').innerText = content.desc;
    document.querySelector('h3[data-lang="sites_title"]').innerText = uiTrans[currentLang].sites_title;

    sitesList.innerHTML = '';
    city.sites.forEach(site => {
        const sData = currentLang === 'ar' ? site.ar : site.en;
        const item = document.createElement('div');
        item.className = 'site-item';
        item.innerHTML = `<span>${sData.name}</span> <i class="fas fa-chevron-left"></i>`;
        item.addEventListener('click', () => openSiteModal(site));
        sitesList.appendChild(item);
    });

    cityPanel.classList.add('open');
}


const siteModal = document.getElementById('siteModal');
function openSiteModal(site) {
    const sData = currentLang === 'ar' ? site.ar : site.en;
    document.getElementById('smTitle').innerText = sData.name;
    document.getElementById('smDesc').innerText = sData.desc;
    document.getElementById('smImage').src = site.img;
    document.querySelector('.modal-btn').innerText = uiTrans[currentLang].visit_now;
    siteModal.classList.add('active');
}
document.querySelector('.close-modal').addEventListener('click', () => siteModal.classList.remove('active'));

/* =========================================
   6. TRANSLATION & SEARCH (THE FIX)
   ========================================= */
const langAr = document.getElementById('lang-ar');
const langEn = document.getElementById('lang-en');

function setLang(lang) {
    // SAVE TO STORAGE
    localStorage.setItem('preferredLang', lang);

    currentLang = lang;
    document.body.className = lang === 'en' ? 'english-mode' : '';
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    
    // UI Updates
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(uiTrans[lang][key]) el.innerText = uiTrans[lang][key];
    });
    
    // Update Search Placeholder if it exists
    if(searchInput) searchInput.placeholder = uiTrans[lang].search;

    // Refresh Pins & Panel
    renderPins();
    if (activeCityId) {
        const city = mapData.find(c => c.id === activeCityId);
        if(city) openCityPanel(city);
    }
}

langEn.addEventListener('click', () => { langEn.classList.add('active'); langAr.classList.remove('active'); setLang('en'); });
langAr.addEventListener('click', () => { langAr.classList.add('active'); langEn.classList.remove('active'); setLang('ar'); });

// Search Logic
searchInput.addEventListener('keyup', (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.map-pin').forEach(pin => {
        const id = pin.getAttribute('data-id');
        const city = mapData.find(c => c.id === id);
        const match = city.content.en.title.toLowerCase().includes(val) || city.content.ar.title.includes(val);
        pin.style.opacity = match ? "1" : "0.1";
        pin.style.pointerEvents = match ? "all" : "none";
    });
});

/* =========================================
   7. GOLDEN SAND CURSOR
   ========================================= */
const cursorContainer = document.createElement('div');
cursorContainer.style.position = 'fixed'; cursorContainer.style.top = '0'; cursorContainer.style.left = '0'; cursorContainer.style.width = '100%'; cursorContainer.style.height = '100%'; cursorContainer.style.pointerEvents = 'none'; cursorContainer.style.zIndex = '9999';
document.body.appendChild(cursorContainer);

document.addEventListener('mousemove', function(e) {
    const sand = document.createElement('div');
    sand.style.position = 'absolute'; sand.style.left = e.clientX + 'px'; sand.style.top = e.clientY + 'px'; sand.style.width = Math.random() * 4 + 2 + 'px'; sand.style.height = sand.style.width; sand.style.background = '#D4AF37'; sand.style.borderRadius = '50%'; sand.style.boxShadow = '0 0 6px #D4AF37'; sand.style.transition = 'all 1s ease';
    cursorContainer.appendChild(sand);
    setTimeout(() => { sand.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 30 + 30}px)`; sand.style.opacity = '0'; }, 10);
    setTimeout(() => { sand.remove(); }, 1000);
});
/* =========================================
   8. PARALLAX BACKGROUND EFFECT
   ========================================= */
document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.bg-container');
    const grid = document.querySelector('.tech-grid');
    
    // Calculate movement based on mouse position
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    // Move Background (Slow)
    bg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    
    // Move Tech Grid (Faster for depth)
    if(grid) {
        grid.style.transform = `translateX(${x * 2}px) translateY(${y * 2}px)`;
    }
});

/* =========================================
   ADVANCED FILTERING LOGIC
   ========================================= */
// Define which cities belong to which category by ID
const filterGroups = {
    ancient: ['cairo', 'giza', 'luxor', 'aswan', 'qena', 'sohag', 'minya', 'benisuef', 'edfu', 'komombo', 'abusimbel', 'tanis', 'rashid'],
    sea: ['alexandria', 'hurghada', 'sharm', 'marsaalam', 'dahab', 'nuweiba', 'taba', 'matruh', 'alamein', 'portsaid', 'damietta', 'suez'],
    nature: ['fayoum', 'siwa', 'whitedesert', 'saint', 'ismailia', 'mansoura'], // Mansoura (Island of Roses)
    religious: ['cairo', 'saint', 'sohag', 'assiut', 'tanta', 'rashid'], // Coptic/Islamic
    delta: ['tanta', 'mansoura', 'damietta', 'portsaid', 'ismailia', 'suez', 'rashid', 'tanis']
};

const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 1. UI Update
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 2. Get Filter
        const filter = btn.getAttribute('data-filter');

        // 3. Filter the Pins
        document.querySelectorAll('.map-pin').forEach(pin => {
            const cityId = pin.getAttribute('data-id');
            
            let isVisible = false;

            if (filter === 'all') {
                isVisible = true;
            } else if (filterGroups[filter] && filterGroups[filter].includes(cityId)) {
                isVisible = true;
            }

            // Apply Animation
            if (isVisible) {
                pin.style.opacity = '1';
                pin.style.transform = 'translate(-50%, -50%) scale(1)';
                pin.style.pointerEvents = 'all';
            } else {
                pin.style.opacity = '0.1'; // Fade out instead of hide
                pin.style.transform = 'translate(-50%, -50%) scale(0.5)';
                pin.style.pointerEvents = 'none';
            }
        });
    });
});

/* UPDATE TRANSLATIONS FOR NEW FILTERS */
// Add these new keys to your existing uiTrans object in map.js
Object.assign(uiTrans.ar, {
    filter_all: "الكل",
    filter_ancient: "آثار مصر القديمة",
    filter_sea: "بحار وشواطئ",
    filter_nature: "طبيعة وواحات",
    filter_religious: "سياحة دينية",
    filter_delta: "مدن الدلتا"
});

Object.assign(uiTrans.en, {
    filter_all: "All",
    filter_ancient: "Ancient Egypt",
    filter_sea: "Sea & Beaches",
    filter_nature: "Nature & Oases",
    filter_religious: "Religious Tourism",
    filter_delta: "Delta & Canal"
});
/* =========================================
   FILTER MENU TOGGLE LOGIC
   ========================================= */
const filterTrigger = document.getElementById('filterToggle');
const filterMenu = document.getElementById('filterMenu');

// Toggle Menu
if(filterTrigger) {
    filterTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closing
        filterMenu.classList.toggle('open');
        filterTrigger.classList.toggle('active');
    });
}

// Close Menu when clicking outside
document.addEventListener('click', (e) => {
    if (filterMenu && filterMenu.classList.contains('open')) {
        if (!filterMenu.contains(e.target) && !filterTrigger.contains(e.target)) {
            filterMenu.classList.remove('open');
            filterTrigger.classList.remove('active');
        }
    }
});

// Close Menu after selecting a filter
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // ... (Your existing filtering logic runs here) ...
        
        // Add this line to close menu after selection
        filterMenu.classList.remove('open');
        filterTrigger.classList.remove('active');
    });
});
