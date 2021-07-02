// cards
const card = document.querySelectorAll('.card')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const card3 = document.querySelector('.card-3')
const card4 = document.querySelector('.card-4')
const card5 = document.querySelector('.card-5')
// cards

// pause button
const pause = document.querySelector('.pause-btn')
// pause button

// audio files
var audio1 = new Audio('card1.mp3')
var audio2 = new Audio('../card2.mp3')
var audio3 = new Audio('../card3.mp3')
var audio4 = new Audio('../card4.mp3')
var audio5 = new Audio('../card5.mp3')

// audio files

// functions
function play1() {
    audio1.play();
}
function stop1() {
    audio1.pause();
}
function play2() {
    audio2.play();
}
function stop2() {
    audio2.pause();
}
function play3() {
    audio3.play();
}
function stop3() {
    audio3.pause();
}
function play4() {
    audio4.play();
}
function stop4() {
    audio4.pause();
}
function play5() {
    audio5.play();
}
function stop5() {
    audio5.pause();
}
// functions

card.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('card-active')
    })
})

function removeActiveClasses (){
    card.forEach(panel => {
        panel.classList.remove('card-active')
    })
}
card1.addEventListener('click', () => {
    stop2();
    stop3();
    stop4();
    stop5();
    play1();
})
card2.addEventListener('click', () => {
    stop1();
    stop3();
    stop4();
    stop5();
    play2();
})
card3.addEventListener('click', () => {
    stop1();
    stop2();
    stop4();
    stop5();
    play3();
    
})
card4.addEventListener('click', () => {
    stop1();
    stop2();
    stop3();
    stop5();
    play4();
})
card5.addEventListener('click', () => {
    stop1();
    stop2();
    stop3();
    stop4();
    play5();
})
pause.addEventListener('click',() => {
    removeActiveClasses();
    stop1();
    stop2();
    stop3();
    stop4();
    stop5();
})
