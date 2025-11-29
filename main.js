const pins = document.querySelectorAll('.gps-pin');
const targetBox = document.getElementById('targetBox');
const map = document.getElementById('egyptMap');
const panel = document.getElementById('infoPanel');
const list = document.getElementById('attractionsList');
const title = document.getElementById('panelTitle');
const sub = document.getElementById('panelSub');

// Modal Elements
const modal = document.getElementById('detailModal');
const mTitle = document.getElementById('mTitle');
const mDesc = document.getElementById('mDesc');
// We now target the IMAGE tag directly, not the container
const mImage = document.getElementById('modalRealImage'); 
const slideCounter = document.getElementById('slideCounter');
const closeModalIcon = document.getElementById('closeModalIcon');

// --- SLIDESHOW VARIABLES ---
let currentImages = [];
let currentIndex = 0;

// --- DATABASE ---
// (I kept your exact data. To make a slideshow, just change 'img' to 'images': ['a.jpg', 'b.jpg'] later)
const content = {
    fayoum: { 
        title: "FAYOUM OASIS", sub: "ANCIENT MYSTERIES", 
        sites: [
            { name: "Wadi El Hitan", desc: "Valley of the Whales, a UNESCO World Heritage Site.", img: "whales.jpg" },
            { name: "Pyramid of Hawara", desc: "The Black Pyramid of Amenemhat III.", img: "hawara.jpg" },
            { name: "Magic Lake", desc: "A beautiful lake that changes color.", img: "magiclake.jpg" },
            { name: "Karanis", desc: "Ruins of an ancient Greco-Roman city.", img: "karanis.jpg" }
        ] 
    },
    minya: { 
        title: "MINYA", sub: "THE ATEN CITY", 
        sites: [
            { name: "Tell el-Amarna", desc: "The capital city built by Akhenaten.", img: "amarna.jpg" },
            { name: "Beni Hasan", desc: "Rock-cut tombs with vivid paintings.", img: "benihasan.jpg" },
            { name: "Tuna el-Gebel", desc: "Necropolis of Hermopolis.", img: "tuna.jpg" }
        ] 
    },
    edfu: { 
        title: "EDFU & KOM OMBO", sub: "NILE LEGENDS", 
        sites: [
            { name: "Temple of Edfu", desc: "Best preserved temple, dedicated to Horus.", img: "edfu_temple.jpg" },
            { name: "Kom Ombo Temple", desc: "Double temple for Sobek and Horus.", img: "komombo.jpg" },
            { name: "Crocodile Museum", desc: "Mummified crocodiles.", img: "croc.jpg" }
        ] 
    },
    cairo: { 
        title: "CAIRO", sub: "THE CAPITAL", 
        sites: [
            { name: "Great Pyramids", desc: "The oldest Wonder of the World.", img: "pyramids.jpg" },
            { name: "The Sphinx", desc: "Mythical creature with a human head and lion body.", img: "sphinx.jpg" },
            { name: "Grand Museum", desc: "Largest archaeological museum.", img: "gem.jpg" },
            { name: "Khan el-Khalili", desc: "Historic bazaar and souq.", img: "khan.jpg" },
            { name: "Cairo Citadel", desc: "Medieval fortification.", img: "citadel.jpg" },
            { name: "Cairo Tower", desc: "Panoramic views.", img: "tower.jpg" }
        ]
    },
    luxor: { 
        title: "LUXOR", sub: "ANCIENT THEBES", 
        sites: [
            { name: "Karnak Temple", desc: "Vast mix of decayed temples and pylons.", img: "karnak.jpg" },
            { name: "Valley of the Kings", desc: "Burial place of Pharaohs.", img: "vok.jpg" },
            { name: "Luxor Temple", desc: "Located on the east bank of the Nile.", img: "luxor_temple.jpg" },
            { name: "Hatshepsut Temple", desc: "Built for the Eighteenth Dynasty pharaoh.", img: "hatshepsut.jpg" },
            { name: "Valley of Queens", desc: "Where wives of pharaohs were buried.", img: "voq.jpg" },
            { name: "Colossi of Memnon", desc: "Two massive stone statues.", img: "memnon.jpg" }
        ]
    },
    aswan: { 
        title: "ASWAN", sub: "NUBIAN FRONTIER", 
        sites: [
            { name: "Philae Temple", desc: "Island temple of Isis.", img: "philae.jpg" },
            { name: "The High Dam", desc: "Embankment dam across the Nile.", img: "dam.jpg" },
            { name: "Abu Simbel", desc: "Massive rock-cut temples.", img: "abusimbel.jpg" },
            { name: "Nubian Village", desc: "Colorful houses and culture.", img: "nubian.jpg" },
            { name: "Unfinished Obelisk", desc: "Largest known ancient obelisk.", img: "obelisk.jpg" }
        ]
    },
    alexandria: { 
        title: "ALEXANDRIA", sub: "MEDITERRANEAN PEARL", 
        sites: [
            { name: "Qaitbay Citadel", desc: "Defensive fortress on the coast.", img: "qaitbay.jpg" },
            { name: "Bibliotheca", desc: "Major library and cultural center.", img: "library.jpg" },
            { name: "Montaza Palace", desc: "Palace and extensive gardens.", img: "montaza.jpg" },
            { name: "Pompey's Pillar", desc: "Roman triumphal column.", img: "pompey.jpg" },
            { name: "Kom El Shoqafa", desc: "Catacombs with tombs and statues.", img: "catacombs.jpg" }
        ]
    },
    sharm: { 
        title: "SHARM EL SHEIKH", sub: "CITY OF PEACE", 
        sites: [
            { name: "Ras Mohammed", desc: "Coral reefs and marine life.", img: "rasmo.jpg" },
            { name: "Naama Bay", desc: "Tourist hub.", img: "naama.jpg" },
            { name: "Mount Sinai", desc: "Holy mountain.", img: "sinai.jpg" },
            { name: "Soho Square", desc: "Entertainment center.", img: "soho.jpg" },
            { name: "Old Market", desc: "Traditional market.", img: "oldmarket.jpg" }
        ]
    },
    hurghada: { title: "HURGHADA", sub: "RED SEA RIVIERA", sites: [{ name: "Giftun Island", desc: "Snorkeling.", img: "giftun.jpg" }, { name: "Marina", desc: "Luxury walkway.", img: "marina.jpg" }] },
    siwa: { title: "SIWA", sub: "WESTERN OASIS", sites: [{ name: "Cleopatra Spring", desc: "Natural spring.", img: "cleo.jpg" }] },
    marsa: { title: "MARSA ALAM", sub: "DIVING PARADISE", sites: [{ name: "Abu Dabbab", desc: "Turtles bay.", img: "dabbab.jpg" }] }
};

// --- INTERACTION LOGIC ---
pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
        // 1. Move Target Box
        const pinLeft = pin.style.left;
        const pinTop = pin.style.top;
        
        targetBox.style.opacity = "1";
        targetBox.style.left = pinLeft;
        targetBox.style.top = pinTop;
        
        // 2. Zoom Effect
        setTimeout(() => {
            map.style.transformOrigin = `${pinLeft} ${pinTop}`;
            map.style.transform = "scale(3.5)";
            pins.forEach(p => p.style.opacity = '0');
            targetBox.style.opacity = '0';
        }, 600);

        // 3. Update & Show Side Panel
        const loc = pin.getAttribute('data-location');
        if(content[loc]) {
            title.innerText = content[loc].title;
            sub.innerText = content[loc].sub;
            
            // GENERATE THE LIST
            list.innerHTML = "";
            content[loc].sites.forEach(site => {
                let row = document.createElement('div');
                row.className = 'attraction-row';
                row.innerHTML = `<i class="fas fa-caret-right"></i> ${site.name}`;
                
                // CLICK EVENT FOR SLIDESHOW
                row.addEventListener('click', () => {
                    openSlideshow(site);
                });

                list.appendChild(row);
            });

            setTimeout(() => {
                panel.classList.add('active');
            }, 1000);
        }
    });
});

// --- NEW SLIDESHOW FUNCTIONS (Safe Version) ---

function openSlideshow(siteData) {
    mTitle.innerText = siteData.name;
    mDesc.innerText = siteData.desc;
    
    // 1. DETECT IMAGES
    // Logic: If 'images' list exists, use it. If not, use the single 'img' as a list of 1.
    if (siteData.images && siteData.images.length > 0) {
        currentImages = siteData.images;
    } else if (siteData.img) {
        currentImages = [siteData.img];
    } else {
        currentImages = ["placeholder.jpg"];
    }

    // 2. RESET SLIDESHOW
    currentIndex = 0;
    updateImageDisplay();
    
    modal.classList.add('open');
}

function updateImageDisplay() {
    // Fade out
    mImage.style.opacity = 0;
    
    setTimeout(() => {
        // Change Image Source
        mImage.src = currentImages[currentIndex];
        
        // Update Counter (If element exists)
        if(slideCounter) {
            slideCounter.innerText = `${currentIndex + 1} / ${currentImages.length}`;
        }

        // Fade in
        mImage.style.opacity = 1;
    }, 200);
}

// --- BUTTONS (WITH SAFETY CHECKS) ---
// We check if the button exists first, to prevent crashes

const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

if(prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = currentImages.length - 1; // Loop to end
        }
        updateImageDisplay();
    });
}

if(nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= currentImages.length) {
            currentIndex = 0; // Loop to start
        }
        updateImageDisplay();
    });
}

// --- CLOSE LOGIC ---
closeModalIcon.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('open');
    }
});

// --- BACK TO MAP BUTTON ---
document.getElementById('closePanel').addEventListener('click', () => {
    panel.classList.remove('active');
    map.style.transform = "scale(1)";
    setTimeout(() => {
        pins.forEach(p => p.style.opacity = '1');
        targetBox.style.opacity = '0';
    }, 500);
});// --- LANGUAGE SWITCHER LOGIC ---

// 1. Dictionary of Words
const translations = {
    en: {
        home: "HOME", dest: "DESTINATIONS", history: "HISTORY", login: "LOGIN",
        cairo: "CAIRO", luxor: "LUXOR", aswan: "ASWAN", alexandria: "ALEXANDRIA",
        sharm: "SHARM", hurghada: "HURGHADA", siwa: "SIWA", marsa: "MARSA ALAM",
        fayoum: "FAYOUM", minya: "MINYA", edfu: "EDFU",
        panelTitle: "LOCATION", panelSub: "SECTOR ANALYSIS",
        reset: "RESET VIEW", tour: "START VIRTUAL TOUR"
    },
    ar: {
        home: "الرئيسية", dest: "الوجهات", history: "التاريخ", login: "دخول",
        cairo: "القاهرة", luxor: "الأقصر", aswan: "أسوان", alexandria: "الإسكندرية",
        sharm: "شرم الشيخ", hurghada: "الغردقة", siwa: "سيوة", marsa: "مرسى علم",
        fayoum: "الفيوم", minya: "المنيا", edfu: "إدفو",
        panelTitle: "الموقع", panelSub: "تحليل القطاع",
        reset: "إعادة تعيين", tour: "ابدأ الجولة الافتراضية"
    }
};

let currentLang = 'en';
const langBtn = document.getElementById('langBtn');

// 2. Button Click Event
if(langBtn) {
    langBtn.addEventListener('click', () => {
        // Toggle Language
        currentLang = (currentLang === 'en') ? 'ar' : 'en';
        langBtn.innerText = (currentLang === 'en') ? 'AR' : 'EN';
        
        // Update Page Text
        updateLanguage();
    });
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update Nav Links
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(t[key]) el.innerText = t[key];
    });

    // Update Pins on Map
    document.querySelectorAll('.gps-pin').forEach(pin => {
        const key = pin.getAttribute('data-location');
        const nameSpan = pin.querySelector('.pin-name');
        if(t[key]) nameSpan.innerText = t[key];
    });

    // Update Static Panel Text
    if(document.getElementById('panelTitle')) document.getElementById('panelTitle').innerText = t.panelTitle;
    if(document.getElementById('panelSub')) document.getElementById('panelSub').innerText = t.panelSub;
    if(document.getElementById('closePanel')) document.getElementById('closePanel').innerText = t.reset;
    
    // Update Direction (Right-to-Left for Arabic)
    document.body.style.direction = (currentLang === 'ar') ? 'rtl' : 'ltr';
    document.body.style.fontFamily = (currentLang === 'ar') ? "'Cairo', sans-serif" : "'Rajdhani', sans-serif";
}
