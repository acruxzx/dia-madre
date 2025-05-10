function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
}
   // Genera corazones flotantes
    document.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            body.appendChild(heart);
        }
    });