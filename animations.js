
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const typingText = document.getElementById('typing-text');
    const text = "AnimatePage";
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    setTimeout(typeWriter, 1000);

    // Ripple button effect
    const buttons = document.querySelectorAll('.ripple-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Scroll triggered animations
    const scrollItems = document.querySelectorAll('.scroll-item');
    
    function checkScroll() {
        scrollItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
    
    // Stagger animation for boxes
    const stagger = document.querySelector('.stagger');
    if (stagger) {
        const boxes = stagger.querySelectorAll('.box');
        boxes.forEach((box, index) => {
            box.style.transitionDelay = `${index * 0.1}s`;
        });
    }
});
