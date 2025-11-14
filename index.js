// ===== Greeting =====
const greetings = [
    "Welcome to the glitter pit... proceed with caution.💋",
    "Brace yourself — nonsense ahead.🦖",
    "Your presence has increased site glam by 12%.✨",
    "You look fantastic today, by the way.🔥"
];

document.getElementById("greeting").innerHTML =
    `<p class="centered">${greetings[Math.floor(Math.random() * greetings.length)]}</p>`;

// ===== Mood Bubbles =====
const bubbles = [
    "✨ Shine on, chaotic diamond!",
    "🌈 Today you are unstoppable.",
    "💋 Peak glam. No notes.",
    "🦄 Majestic nonsense detected.",
    "🔥 Serving opinions hotter than lava."
];

function popBubble() {
    const bubble = document.createElement("div");
    bubble.className = "mood-bubble";
    bubble.textContent = bubbles[Math.floor(Math.random() * bubbles.length)];
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 2500);
}

setInterval(popBubble, 6000);

// ===== Sparkles on mouse =====
document.addEventListener("mousemove", (e) => {
    const spark = document.createElement("div");
    spark.className = "sparkle";
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 700);
});
