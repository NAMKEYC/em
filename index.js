document.getElementById('revealMessageBtn').addEventListener('click', function() {
    const message = document.querySelector('.message');
    message.classList.add('revealed');
    this.style.display = 'none'; // Ẩn nút sau khi bấm
});