// calc background color

let q = document.querySelector(".calc-outer");
let output = document.querySelector("#output");

let a = "";
let b = "";
let opr = "";


let close_but = document.querySelector("#close-but")

function changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    q.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
}




function firstNumber(x) {
    if (x === "." && a.includes(".")) {
        return;
    }

    a += x;
    output.value += x;
}

function operator(p) {
    opr = p;
    b = parseFloat(a);
    a = "";
    output.value = "";
}

function result() {
    let ans;

    if (opr === "+") {
        ans = parseFloat(b) + parseFloat(a);
    } else if (opr === "-") {
        ans = parseFloat(b) - parseFloat(a);
    } else if (opr === "*") {
        ans = parseFloat(b) * parseFloat(a);
    } else if (opr === "/") {
        if (parseFloat(a) === 0) {
            output.value = "Error";
            a = "";
            b = "";
            opr = "";
            return;
        }
        ans = parseFloat(b) / parseFloat(a);
    } else if (opr === "%") {
        ans = parseFloat(b) % parseFloat(a);
    }

    output.value = ans;
    a = String(ans);
    b = "";
    opr = "";

  
}

 

function clearDisplay() {
    a = "";
    b = "";
    opr = "";
    output.value = "";
}


changeColor();
