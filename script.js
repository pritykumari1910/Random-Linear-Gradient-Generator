function generateGradient() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(${angle}deg, ${randomColor1.rgb}, ${randomColor2.rgb})`;
    document.getElementById('colorValues').innerHTML = 
        `Color 1: ${randomColor1.rgb} (${randomColor1.hex})<br> 
         Color 2: ${randomColor2.rgb} (${randomColor2.hex})`;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    return { rgb, hex };
}