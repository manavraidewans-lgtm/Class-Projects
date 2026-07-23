let name = document.querySelector("#name");
let phy = document.querySelector("#phy");
let che = document.querySelector("#che");
let maths = document.querySelector("#maths");
let bio = document.querySelector("#bio");
let hindi = document.querySelector("#hindi");

let reportCard = document.querySelector("#reportCard");

function generate(event){

    event.preventDefault();

    reportCard.innerHTML = "";
    reportCard.style.display = "block";

    let total = Number(phy.value) + Number(che.value) + Number(maths.value) + Number(bio.value) + Number(hindi.value);

    let percentage = (total / 500) * 100;

    let heading = document.createElement("h2");
    heading.innerText = "REPORT CARD";
    reportCard.appendChild(heading);

    let student = document.createElement("h3");
    student.innerText = `Name of the student : ${name.value}`;
    reportCard.appendChild(student);

    createSubject("Physics", Number(phy.value));
    createSubject("Chemistry", Number(che.value));
    createSubject("Mathematics", Number(maths.value));
    createSubject("Biology", Number(bio.value));
    createSubject("Hindi", Number(hindi.value));

    let totalMarks = document.createElement("h3");
    totalMarks.innerText = "Total : " + total;
    reportCard.appendChild(totalMarks);

    let per = document.createElement("h3");
    per.innerText = "Percentage : " + percentage + "%";
    reportCard.appendChild(per);

    let result = document.createElement("h3");

    if(
        Number(phy.value) < 33 ||
        Number(che.value) < 33 ||
        Number(maths.value) < 33 ||
        Number(bio.value) < 33 ||
        Number(hindi.value) < 33
    )
    {
        result.innerText = "Status : FAIL";
        result.style.color = "red";
    }
    else{
        result.innerText = "Status : PASS";
        result.style.color = "green";
    }

    reportCard.appendChild(result);
}

function createSubject(subject, marks){

    let p = document.createElement("p"); 

    p.innerText = subject + " : " + marks;

    if(marks <= 32){
        p.style.color = "red";
    }
    else if(marks <= 49){
        p.style.color = "purple";
    }
    else if(marks <= 69){
        p.style.color = "orange";
    }
    else if(marks <= 89){
        p.style.color = "yellow";
    }
    else{
        p.style.color = "green";
    }

    reportCard.appendChild(p);
}