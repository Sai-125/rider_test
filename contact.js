let grid_btn = document.getElementById('grid_btn')
let side_close = document.getElementById('side_close')
let side_bar = document.querySelector('.side_bar')

grid_btn.onclick=()=>{
    side_bar.classList.add('side_open')
}
side_close.onclick=()=>{
    side_bar.classList.remove('side_open')
}


let search_btn = document.getElementById('search_btn')
let top_close = document.getElementById('top_close')
let top_search = document.querySelector('.top_search')


search_btn.onclick=()=>{
    top_search.classList.add('top_open')
}

top_close.onclick=()=>{
    top_search.classList.remove('top_open')
}

let top_nav_close = document.getElementById('top_nav_close')
let menu_btn = document.getElementById('menu_btn')
let top_nav = document.querySelector('.top_nav')

top_nav_close.onclick=()=>{
    top_nav.classList.remove('nav_top_open')
}

menu_btn.onclick=()=>{
    top_nav.classList.add('nav_top_open')
}



document.addEventListener('DOMContentLoaded', function() {
    let card1Value = 0;
    let card2Value = 0;
    const target1 = 100; // Target value for the first card
    const target2 = 2587; // Target value for the second card
    const steps = 100; // Total steps to reach target values
    const increment1 = target1 / steps; // Increment for the first card
    const increment2 = target2 / steps; // Increment for the second card
    
    const countdown = () => {
        if (card1Value < target1 || card2Value < target2) {
            if (card1Value < target1) {
                card1Value += increment1;
                if (card1Value > target1) card1Value = target1; // Prevent overshoot
            }
            if (card2Value < target2) {
                card2Value += increment2;
                if (card2Value > target2) card2Value = target2; // Prevent overshoot
            }
            document.getElementById('card1').innerText = Math.round(card1Value);
            document.getElementById('card2').innerText = Math.round(card2Value);
            setTimeout(countdown, 50); // Adjust speed as needed
        }
    };

    const section = document.getElementById('countdownSection');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countdown();
                observer.unobserve(entry.target); // Stops observing once countdown starts
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    observer.observe(section);
});



const track = document.querySelector('.carousel-track');

let index = 0;

function moveCarousel() {
    const totalCards = document.querySelectorAll('.carousel-card').length;
    index = (index + 1) % totalCards;
    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000); // Change every 3 seconds
