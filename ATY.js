import { arr } from "./arr.js";
let main = document.querySelector(".main");
let divButtons = document.querySelector(".divButtons");
document.querySelector(".btn-move").onclick = getNextQuestion;
document.querySelector(".btn-back").onclick = getPrevQuestion;


let gridBlock = document.querySelector(".grid-block");
for (let i = 0; i < arr.length; i++) {
    gridBlock.innerHTML += `<div class="grid">${i + 1}</div>`;
}
let NodeListItemGrid = document.querySelectorAll(".grid");

let count = 0;

function getHtmlAnswersFromArr() {
    let nKey = "";
    for (let key of Object.keys(arr[count].answers)) {
        nKey += `<li>${key}</li>`;
    }
    return `${nKey}`;
}
getHtml(arr);

function giveCorrectlyAnswer() {
    let correctly;
    let answers = document.querySelectorAll("li");
    answers.forEach((answers) => {
        answers.onclick = clickByAnswer;
    });
    function clickByAnswer(e) {
        correctly = arr[count].answers[e.target.textContent];
        if (correctly == true) {
            NodeListItemGrid[count].style.backgroundColor = "green";
        } else {
            NodeListItemGrid[count].style.backgroundColor = "red";
        }
        count++
        getHtml(arr);
    }
}
let backgroundColor;
function getHtml(arr) {
    while(NodeListItemGrid[count].style.backgroundColor=='red'||NodeListItemGrid[count].style.backgroundColor=='green'){
        count++;
    }
    let html;
    if (document.querySelector(".div-remove")) {
        document.querySelector(".div-remove").remove();
    }
    return [
        (html = `<div class = "div-remove">
            <h3>Вопрос: ${count + 1}</h3>
            <img src = '${arr[count].img}'/>
            <div class = "pDiv"><p>${arr[count].isQuastion}</p></div>
            <ol>${getHtmlAnswersFromArr()}</ol>
        </div>`),
        main.insertAdjacentHTML("afterbegin", html),
        main.insertAdjacentElement("beforeend", divButtons),
        giveCorrectlyAnswer(),
    ];
}
function clickByNum(e) {
    count = +e.target.textContent - 1;
    backgroundColor = NodeListItemGrid[count].style.backgroundColor;
    if (backgroundColor === "red" || backgroundColor === "green") {
        return false;
    }
    console.log(count + 1);
    getHtml(arr);
}
NodeListItemGrid.forEach((item) => {
    item.onclick = clickByNum;
});

let a = "";
let b = null;
function getNextQuestion() {
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
    getHtml(arr);
    main.insertAdjacentElement("beforeend", divButtons);
}
function getPrevQuestion() {
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
    getHtml(arr);

    main.insertAdjacentElement("beforeend", divButtons);
}
