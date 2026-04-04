


document.addEventListener("DOMContentLoaded", function() {
    const galleryBtn = document.getElementById('gallery-toggle-btn');
    const extraPhotos = document.querySelectorAll('.extra-photo');

    if (galleryBtn) {
        galleryBtn.addEventListener('click', function() {
            // hidden class එක තිබේදැයි පරීක්ෂා කිරීම
            const isHidden = extraPhotos[0].classList.contains('hidden');

            if (isHidden) {
                // පින්තූර පෙන්වීම
                extraPhotos.forEach(photo => {
                    photo.classList.remove('hidden');
                });
                // බොත්තමේ නම සහ Icon එක වෙනස් කිරීම
                this.innerHTML = 'Hide Gallery <i class="fas fa-chevron-up"></i>';
            } else {
                // පින්තූර සැඟවීම
                extraPhotos.forEach(photo => {
                    photo.classList.add('hidden');
                });
                // බොත්තම මුල් තත්වයට පත් කිරීම
                this.innerHTML = 'View Full Gallery <i class="fas fa-chevron-down"></i>';
                
                // සඟවන විට Gallery එකේ ඉහළට Scroll කිරීම (වීඩියෝ එකේ වගේ)
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});



var audio = document.getElementById("bgMusic");
var btn = document.getElementById("muteBtn");

var audio = document.getElementById("bgMusic");
var btn = document.getElementById("muteBtn");

// ශබ්දය අඩු මට්ටමකට සැකසීම (Default Volume)
audio.volume = 0.2; 

// පිටුවට පිවිසි පසු ඕනෑම තැනක ක්ලික් කළ සැනින් සින්දුව ප්ලේ වීමට
document.body.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    }
}, { once: true });

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    btn.innerHTML = "🔊 Mute";
    // Mute එක අයින් කරන විටත් ශබ්දය පාලනය කිරීමට අවශ්‍ය නම්:
    audio.volume = 0.2; 
  } else {
    audio.muted = true;
    btn.innerHTML = "🔈 Unmute";
  }
}
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('arsenalTrack');
    const items = document.querySelectorAll('.tech-item');
    let currentIndex = 0;

    function moveSpotlight() {
        // Hamoma active class eken ain karanna
        items.forEach(item => item.classList.remove('active'));

        // Aluth eka active karanna
        const activeItem = items[currentIndex];
        activeItem.classList.add('active');

        // Center karana calculation eka
        const containerWidth = track.parentElement.offsetWidth;
        const itemOffset = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;

        // Track eka horizontal widihata center ekata scroll karanna
        const scrollAmount = (containerWidth / 2) - (itemOffset + itemWidth / 2);
        track.style.transform = `translateX(${scrollAmount}px)`;

        // Next index
        currentIndex = (currentIndex + 1) % items.length;
    }

    // Start rotation (Thathpara 2.5n 2.5ta maru wenawa)
    setInterval(moveSpotlight, 2500);
    moveSpotlight(); // First run
});
function updateLiveAge() {
    // උපන්දිනය: 2009 සැප්තැම්බර් 8
    const birthDate = new Date("2009-09-08T00:00:00");
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    // මාස සහ දින සෘණ අගයන් ගැනීම වැළැක්වීමට (Date Logic)
    if (days < 0) {
        months--;
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // HTML එකේ IDs තිබේදැයි පරීක්ෂා කර අගයන් ඇතුළත් කිරීම
    const ids = ["years", "months", "days", "hours", "mins", "secs"];
    const values = [years, months, days, hours, mins, secs];

    ids.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = values[index].toString().padStart(2, '0');
        }
    });
}



// පේජ් එක ලෝඩ් වූ විගස සහ සෑම තත්පරයකටම ක්‍රියාත්මක කිරීම
document.addEventListener("DOMContentLoaded", function() {
    updateLiveAge();
    setInterval(updateLiveAge, 1000);
});



window.addEventListener("load", function() {
    const loader = document.getElementById("loader-wrapper");
    // තත්පරයකට පසු ස්ක්‍රීන් එක ඉවත් වේ
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});


// Galaxy Engine
const canvas = document.getElementById('galaxy-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    stars = [];
    for (let i = 0; i < 150; i++) stars.push(new Star());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
resize(); init(); animate();

const myData = [
    { 
        title: "V2Ray Selling", 
        icon: "fa-solid fa-shield-halved", 
        desc: "High-speed, premium tunneling services. Access the best servers for unlimited browsing.", 
        link: "https://v2ray.speednetlk.me/" 
    },
    { 
        title: "Web Solutions", 
        icon: "fa-solid fa-code", 
        desc: "Developing high-performance, modern websites with premium user experiences.", 
        link: "web-pricing.html" 
    },
    { 
        title: "Photography", 
        icon: "fa-solid fa-camera", 
        desc: "Professional cinematic visuals and high-quality storytelling through photography.", 
        link: "photography.html" // Menna methanata aluth link eka damma
    }
];


// Cards tika screen ekata danna (Render)
const grid = document.getElementById('service-grid');
grid.innerHTML = ''; 

myData.forEach(item => {
    grid.innerHTML += `
        <div class="card">
            <i class="${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank" class="btn">Inquire Now</a>
        </div>`;
});

// Typewriter
const lines = ["Building Code.", "Securing Connections.", "Capturing Life."];
let pIdx = 0, cIdx = 0, isDeleting = false;
function type() {
    const el = document.getElementById('typewriter');
    const current = lines[pIdx];
    el.textContent = isDeleting ? current.substring(0, cIdx--) : current.substring(0, cIdx++);
    if (!isDeleting && cIdx > current.length) { isDeleting = true; setTimeout(type, 2000); }
    else if (isDeleting && cIdx < 0) { isDeleting = false; pIdx = (pIdx + 1) % lines.length; cIdx = 0; setTimeout(type, 500); }
    else { setTimeout(type, isDeleting ? 50 : 100); }
}
type();

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.width = "95%";
        nav.style.top = "10px";
        nav.style.background = "rgba(1, 4, 9, 0.8)";
    } else {
        nav.style.width = "90%";
        nav.style.top = "20px";
        nav.style.background = "rgba(255, 255, 255, 0.03)";
    }
});


const music = document.getElementById("bgMusic");
const musicContainer = document.getElementById("music-container");
const musicText = document.getElementById("music-text");

// 1. Music Toggle function (Button එක එබුවම වැඩ කරන එක)
function toggleMusic() {
    if (music.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

function playAudio() {
    music.play();
    musicContainer.classList.add("playing");
    musicText.innerText = "MUSIC ON";
}

function pauseAudio() {
    music.pause();
    musicContainer.classList.remove("playing");
    musicText.innerText = "MUSIC OFF";
}

// 2. සයිට් එකේ ඕනෑම තැනක මුල්ම ක්ලික් එකේදී ප්ලේ වෙන්න
// හැබැයි බටන් එක උඩ ක්ලික් කළොත් මේක වැඩ නොකරන්න 'stopPropogation' පාවිච්චි කරනවා
document.addEventListener('click', function(e) {
    // ක්ලික් කළේ මියුසික් බටන් එක නෙමෙයි නම් විතරක් ප්ලේ කරන්න
    if (!musicContainer.contains(e.target) && music.paused) {
        playAudio();
    }
}, { once: true });

// සද්දේ පොඩ්ඩක් අඩු කරමු (Premium feel එකට)
music.volume = 0.4;


// Loader එක අයින් කරන Function එක
function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('loader-finished');
    }
}

// සයිට් එකේ හැමදේම ලෝඩ් වුණත් නැතත්, තත්පර 2කින් (2000ms) ලෝඩර් එක අයින් කරන්න
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideLoader, 2000); 
});


document.addEventListener("DOMContentLoaded", function() {
    const galleryBtn = document.getElementById('gallery-toggle-btn');
    const extraPhotos = document.querySelectorAll('.extra-photo');

    if (galleryBtn) {
        galleryBtn.addEventListener('click', function() {
            if (extraPhotos[0].classList.contains('hidden')) {
                extraPhotos.forEach(photo => {
                    photo.classList.remove('hidden');
                    photo.style.animation = "fadeInUp 0.5s ease forwards";
                });
                this.innerHTML = 'Hide Gallery <i class="fas fa-chevron-up"></i>';
            } else {
                extraPhotos.forEach(photo => {
                    photo.classList.add('hidden');
                });
                this.innerHTML = 'View Full Gallery <i class="fas fa-chevron-down"></i>';
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Smooth Scroll for Gallery Link
document.querySelectorAll('a[href="#gallery"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Tabs Switcher
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // මෙහිදී පින්තූර Filter කිරීමේ logic එක අවශ්‍ය නම් එක් කළ හැක
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.mobile-menu-icon i');
    
    // මෙනු එක පෙන්වන්න/හංගන්න
    navLinks.classList.toggle('active');
    
    // Icon එක වෙනස් කරන්න (ඉරි තුන වෙනුවට X අකුර)
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}
// --- Developer Tools Logic ---

// 1. IP Checker 
function fetchIP() {
    const display = document.getElementById('ip-display');
    display.innerText = "Fetching IP...";
    display.style.color = "#8b949e";

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            display.innerText = data.ip;
            display.style.color = "#00ff88"; // ආයෙත් කොළ පාට කරනවා
        })
        .catch(error => {
            display.innerText = "Connection Error";
            display.style.color = "#ff4444";
        });
}

// 2. Password Generator
function generatePass() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let pass = "";
    // අකුරු 16ක පාස්වර්ඩ් එකක් හදනවා
    for (let i = 0; i < 16; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const display = document.getElementById('pass-display');
    display.innerText = pass;
    display.style.color = "#00ff88";
}

