// calc background color 

let q = document.querySelector(".calc-outer");

function changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (!q) return;
    q.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
}

// run once on load
changeColor();