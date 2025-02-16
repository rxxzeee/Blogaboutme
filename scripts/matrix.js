document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const letters = "01日ヒビ不二井七三上下中五円人今休会何作";
    const symbols = letters.split("");
    const fontSize = 16;
    let columns, drops;

    function initMatrix() {
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
    }

    initMatrix();
    window.addEventListener("resize", initMatrix);

    function drawMatrix() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff00";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = symbols[Math.floor(Math.random() * symbols.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);
});
