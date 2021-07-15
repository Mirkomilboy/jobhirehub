let menuBtn = document.querySelector('.menu');
let mobile = document.querySelector('.mobile');

menuBtn.addEventListener('click', function() {
    // console.log('clicked');
    mobile.classList.toggle('hidden');
})