function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"/*"❤"*/;
    //❤ uging mobile devices
    //❤️ using PC

    document.body.appendChild(heart);

    const left = Math.random() * 100;
    heart.style.left = `${left}vw`;

    const size = Math.random() * 40 + 20;
    heart.style.fontSize = `${size}px`;

    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);
