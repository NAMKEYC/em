document.getElementById('revealMessageBtn').addEventListener('click', function() {
    const message = document.querySelector('.message');
    const card = document.querySelector('.card');

    message.classList.add('revealed');
    card.classList.add('opened');
    this.style.display = 'none';

    createFlyingHearts();
});

function createFlyingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'flying-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
