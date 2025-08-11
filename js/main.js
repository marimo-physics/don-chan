document.addEventListener('DOMContentLoaded', function() {
    
    let fanCount = 27;
    const fanButton = document.getElementById('fanButton');
    const messageForm = document.getElementById('messageForm');
    const messagesList = document.getElementById('messagesList');
    
    const messages = [
        { author: 'ファン1号', text: '丼ちゃん、いつも元気をありがとう！' },
        { author: 'ツナ推し', text: 'リボーン愛が伝わってきます！一緒に応援しましょう！' },
        { author: 'きらきら星', text: 'パール調の衣装、とっても似合ってます✨' }
    ];
    
    function createStar() {
        const star = document.createElement('div');
        star.className = 'falling-star';
        
        const starTypes = ['star-tiny', 'star-small', 'star-medium', 'star-large', 'star-bright', 'star-diamond', 'star-cross'];
        const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
        star.classList.add(starType);
        
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = (Math.random() * 6 + 4) + 's';
        star.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.getElementById('starfield').appendChild(star);
        
        setTimeout(() => star.remove(), (parseFloat(star.style.animationDuration) * 1000) + 500);
    }
    
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = -50 + 'px';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'fallSparkle 3s linear';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 3000);
    }
    
    const starfieldContainer = document.createElement('div');
    starfieldContainer.id = 'starfield';
    starfieldContainer.style.position = 'fixed';
    starfieldContainer.style.top = '0';
    starfieldContainer.style.left = '0';
    starfieldContainer.style.width = '100%';
    starfieldContainer.style.height = '100%';
    starfieldContainer.style.pointerEvents = 'none';
    starfieldContainer.style.zIndex = '1';
    starfieldContainer.style.overflow = 'hidden';
    document.body.appendChild(starfieldContainer);
    
    // 初期星の配置
    function initializeStars() {
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.className = 'falling-star';
            
            const starTypes = ['star-tiny', 'star-small', 'star-medium', 'star-large', 'star-bright', 'star-diamond', 'star-cross'];
            const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
            star.classList.add(starType);
            
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.animationDuration = (Math.random() * 6 + 4) + 's';
            star.style.animationDelay = '0s';
            
            document.getElementById('starfield').appendChild(star);
            
            setTimeout(() => star.remove(), (parseFloat(star.style.animationDuration) * 1000) + 500);
        }
    }
    initializeStars();
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fallSparkle {
            to {
                transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes fallingStar {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            95% {
                opacity: 1;
            }
            100% {
                transform: translateY(${window.innerHeight + 150}px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        
        
        .falling-star {
            position: absolute;
            top: -50px;
            width: 2px;
            height: 2px;
            background: #ffd700;
            border-radius: 50%;
            animation: fallingStar linear;
            pointer-events: none;
        }
        
        .falling-star::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background: linear-gradient(to bottom, 
                rgba(255, 215, 0, 0.8) 0%,
                rgba(255, 193, 37, 0.4) 30%,
                transparent 100%);
            transform: translateY(-20px);
            filter: blur(1px);
        }
        
        .star-tiny {
            width: 1px;
            height: 1px;
            background: #ffeb3b;
            box-shadow: 0 0 2px #ffd700, 0 0 4px #ffeb3b;
        }
        
        .star-small {
            width: 2px;
            height: 2px;
            background: #ffd700;
            box-shadow: 0 0 3px #ffd700, 0 0 6px #ffeb3b, 0 0 9px rgba(255, 215, 0, 0.5);
        }
        
        .star-medium {
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, #fff8dc, #ffd700);
            box-shadow: 0 0 4px #ffd700, 0 0 8px #ffeb3b, 0 0 12px rgba(255, 215, 0, 0.5);
        }
        
        .star-large {
            width: 5px;
            height: 5px;
            background: radial-gradient(circle, #fffacd, #ffd700);
            box-shadow: 0 0 5px #ffd700, 0 0 10px #ffeb3b, 0 0 15px rgba(255, 215, 0, 0.6);
        }
        
        .star-bright {
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #fffacd, #ffd700, #ffeb3b);
            box-shadow: 0 0 6px #ffd700, 0 0 12px #ffeb3b, 0 0 18px rgba(255, 215, 0, 0.7);
            animation: fallingStar linear, twinkle 0.5s ease-in-out infinite;
        }
        
        .star-diamond {
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-bottom: 6px solid #ffd700;
            background: transparent;
            transform: rotate(45deg);
            box-shadow: 0 0 8px #ffd700, 0 0 16px rgba(255, 215, 0, 0.8);
        }
        
        .star-diamond::after {
            content: '';
            position: absolute;
            left: -3px;
            top: 2px;
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 6px solid #ffd700;
        }
        
        .star-cross {
            width: 15px;
            height: 3px;
            background: linear-gradient(90deg, transparent, #ffd700, transparent);
            position: relative;
        }
        
        .star-cross::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 6px;
            width: 3px;
            height: 15px;
            background: linear-gradient(0deg, transparent, #ffd700, transparent);
        }
        
        
        
        @keyframes heartPop {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
        
        .heart-animation {
            animation: heartPop 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    setInterval(createStar, 600);
    
    
    setInterval(createSparkle, 3000);
    
    if (fanButton) {
        fanButton.addEventListener('click', function() {
            fanCount++;
            
            const hearts = ['💖', '💝', '💕', '💗', '💓'];
            const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
            
            const heart = document.createElement('div');
            heart.innerHTML = randomHeart;
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.fontSize = '3rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.className = 'heart-animation';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 500);
            
            this.innerHTML = `
                <span class="button-text">ファン ${fanCount}人目！</span>
                <span class="button-sparkle">✨</span>
            `;
            
            for (let i = 0; i < 10; i++) {
                setTimeout(createSparkle, i * 100);
            }
            
            setTimeout(() => {
                this.innerHTML = `
                    <span class="button-text">ファンになる！</span>
                    <span class="button-sparkle">✨</span>
                `;
            }, 2000);
        });
    }
    
    function displayMessages() {
        messagesList.innerHTML = '';
        messages.forEach(msg => {
            const messageItem = document.createElement('div');
            messageItem.className = 'message-item';
            messageItem.style.opacity = '0';
            messageItem.innerHTML = `
                <p class="message-author">${msg.author}</p>
                <p class="message-text">${msg.text}</p>
            `;
            messagesList.appendChild(messageItem);
            
            setTimeout(() => {
                messageItem.style.transition = 'opacity 0.5s ease';
                messageItem.style.opacity = '1';
            }, 100);
        });
    }
    
    displayMessages();
    
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('fanName');
            const messageInput = document.getElementById('fanMessage');
            
            const newMessage = {
                author: nameInput.value || '名無しのファン',
                text: messageInput.value
            };
            
            messages.unshift(newMessage);
            
            if (messages.length > 10) {
                messages.pop();
            }
            
            displayMessages();
            
            const thankYouMessage = document.createElement('div');
            thankYouMessage.innerHTML = '💌 メッセージありがとう！';
            thankYouMessage.style.position = 'fixed';
            thankYouMessage.style.top = '50%';
            thankYouMessage.style.left = '50%';
            thankYouMessage.style.transform = 'translate(-50%, -50%)';
            thankYouMessage.style.background = 'linear-gradient(135deg, #ffb3d9, #ff99cc)';
            thankYouMessage.style.color = 'white';
            thankYouMessage.style.padding = '1rem 2rem';
            thankYouMessage.style.borderRadius = '20px';
            thankYouMessage.style.fontSize = '1.2rem';
            thankYouMessage.style.fontWeight = '600';
            thankYouMessage.style.zIndex = '10000';
            thankYouMessage.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
            document.body.appendChild(thankYouMessage);
            
            setTimeout(() => {
                thankYouMessage.style.transition = 'opacity 0.5s ease';
                thankYouMessage.style.opacity = '0';
                setTimeout(() => thankYouMessage.remove(), 500);
            }, 2000);
            
            nameInput.value = '';
            messageInput.value = '';
            
            for (let i = 0; i < 5; i++) {
                setTimeout(createSparkle, i * 200);
            }
        });
    }
    
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                targetSection.style.animation = 'highlightSection 1s ease';
                setTimeout(() => {
                    targetSection.style.animation = '';
                }, 1000);
            }
        });
    });
    
    const highlightStyle = document.createElement('style');
    highlightStyle.textContent = `
        @keyframes highlightSection {
            0%, 100% { background: transparent; }
            50% { background: linear-gradient(135deg, rgba(216, 191, 255, 0.2), rgba(191, 216, 255, 0.2)); }
        }
    `;
    document.head.appendChild(highlightStyle);
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
        
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '10000';
            modal.style.cursor = 'pointer';
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '10px';
            modalImg.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function() {
                modal.style.transition = 'opacity 0.3s ease';
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            });
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
    
    const fadeInStyle = document.createElement('style');
    fadeInStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(fadeInStyle);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        const heroImage = document.querySelector('.main-visual');
        if (heroImage) {
            const rect = heroImage.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const angleX = (mouseY - centerY) * 0.01;
            const angleY = (mouseX - centerX) * 0.01;
            
            heroImage.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
        }
    });
    
    console.log('丼ちゃんファンサイトへようこそ！✨');
    console.log('ファン数:', fanCount, '人');
});