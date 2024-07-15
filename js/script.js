const openBtn = document.querySelector('.nav_hamburger');
const closeBtn = document.querySelectorAll('.close-btn');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const body = document.querySelector('body');

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    body.style.overflowY = '';
}

openBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.style.overflowY = 'hidden';
})

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})