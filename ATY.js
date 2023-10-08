import { arr } from "./arr.js";
let main = document.querySelector(".main");
let divButtons = document.querySelector(".divButtons");
document.querySelector(".btn-move").onclick = move;
document.querySelector(".btn-back").onclick = back;

let count = 0;
function objAnswer() {
    let nKey = "";
    for (let key of Object.keys(arr[count].answers)) {
        nKey += `<li>${key}</li>`;
    }
    return `${nKey}`;
}

function block(arr) {
    let html;
    if (document.querySelector(".div-remove")) {
        document.querySelector(".div-remove").remove();
    }
    return [
        (html = `<div class = "div-remove">
            <h3>Вопрос: ${count + 1}</h3>
            <img src = '${arr[count].img}'/>
            <div class = "pDiv"><p>${arr[count].isQuastion}</p></div>
            <ol>${objAnswer()}</ol>
        </div>`),
        main.insertAdjacentHTML("afterbegin", html),
        main.insertAdjacentElement("beforeend", divButtons),
        answer(),
    ];
}

block(arr);

let correctly;
function answer() {
    let li = document.querySelectorAll("li");
    li.forEach((item) => {
        item.onclick = handleClickLi;
    });
    function handleClickLi(e) { 
        correctly = arr[count].answers[e.target.textContent];
        if (correctly == true) {
            arrChoiseNum[count].style.backgroundColor = "green";
        } else {
            arrChoiseNum[count].style.backgroundColor = "red";
        }
        count++;
        block(arr);
    }
}

let arrChoise = document.querySelector(".array-choise");
for (let i = 0; i < arr.length; i++) {
    arrChoise.innerHTML += `<div class="grid">${i + 1}</div>`;
}
let arrChoiseNum = document.querySelectorAll(".grid");
function handleClick(e) {
    if(correctly==true || correctly==false){
        return false
    }
    count = +e.target.textContent - 1;
    block(arr);
}
arrChoiseNum.forEach((item) => {
    item.onclick = handleClick;
});



let a = "";
let b = null;
function move() {
    if (a == b) {
        count++;
        b = "";
        a = "";
    }
    a = arr[count];
    if (a == b) {
        b = null;
        a = "";
    }
    count++;
    if (count > arr.length - 1) {
        count = 0;
    }
    block(arr);
    main.insertAdjacentElement("beforeend", divButtons);
}
function back() {
    if (a == b) {
        count--;
        b = "";
        a = "";
    }
    b = arr[count];
    if (a == b) {
        b = null;
        a = "";
    }
    count--;
    if (count < 0) {
        count = arr.length - 1;
        b = arr[count];
    }
    block(arr);
    
    main.insertAdjacentElement("beforeend", divButtons);
}
