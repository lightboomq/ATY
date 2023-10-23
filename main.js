import { arr } from "./globalArr.js";
let main = document.querySelector(".main");
let divButtons = document.querySelector(".divButtons");
document.querySelector(".btn-move").onclick = getNextQuestion;
let gridBlock = document.querySelector(".grid-block");
let timerBlock = document.querySelector(".timerBlock");
let timerP = document.querySelector(".timerP");
let minutes;
let seconds;
let correctly;


const result = [];

for (let i = 0; i < arr.length; i++) {
    gridBlock.innerHTML += `<div class="grid">${i + 1}</div>`;
}
let NodeListItemGrid = document.querySelectorAll(".grid");
let count = 0;

function getHtmlAnswersFromArr() {
    let objKey;
    for(let i=-1; i<count; i++){
        objKey=arr[count].answers.map(item=>`<li class='liAnswer'>${item.answer_text}</li>`);
    }
    return objKey.join(' ')
}

getHtml(arr);

function giveCorrectlyAnswer() {
    let answers = document.querySelectorAll("li");
    answers.forEach(answers => {
        answers.onclick = clickByAnswer;
    });
    function clickByAnswer(e) {
        let arrAnswers=[]
        let indexArrAnswers
        for(let i=0; i<answers.length; i++){
            arrAnswers.push(answers[i].textContent)
        }   
        indexArrAnswers = arrAnswers.indexOf(e.target.textContent)
        arr[count].answers[indexArrAnswers].your_answer = '(Ваш ответ)'
        correctly=arr[count].answers[indexArrAnswers].is_correct
        if (correctly) {
            NodeListItemGrid[count].style.backgroundColor = "green";
            NodeListItemGrid[count].style.color = "white";
        } else {
            NodeListItemGrid[count].style.backgroundColor = "red";
            NodeListItemGrid[count].style.color = "white";
        }
        correctly ? result.push(1) : result.push(0);
        getHtml(arr);
    }
}
for (let i = 0; i < NodeListItemGrid.length; i++) {
    NodeListItemGrid[i].style.backgroundColor = "lightgray";
}
NodeListItemGrid[0].style.backgroundColor = "lightblue";
NodeListItemGrid[0].style.border = "1px solid black";

function getHtml(arr) {
    let html;
    let img;
    if (document.querySelector(".divBlockHtml")) {
        document.querySelector(".divBlockHtml").remove();
    }
    if(result.length >= 5) {
        let sum = result.reduce((sum, num) => sum + num, 0);
        if(result.length - sum >= 2) {
            return [
                html = `<div  class="divBlockHtml"> 
                        <div class="timerBlockEnd">
                            <h2 class = "examInvalid">Билет не сдан</h2>
                            <h3>Правильных ответов: ${sum} из ${result.length}<h3/>
                            <p>Оставшееся время экзамена: ${minutes}:${seconds}<p/>
                            <h3 class='exam-results'>Результаты тестирования АТУ:</h3><br/> 
                        </div>
                    </div>`,
                main.insertAdjacentHTML("afterbegin", html),
                hideElements(),
                getStatisticsResult(),
            ];
        } else {
            return [
                html = `<div class="divBlockHtml"> 
                        <div class="timerBlockEnd">
                            <h2 style = "color:green;">Билет сдан</h2>
                            <h3>Правильных ответов: ${sum} из ${result.length}<h3/>
                            <p>Оставшееся время экзамена: ${minutes}:${seconds}<p/>
                            <h3 class='exam-results'>Результаты тестирования АТУ:</h3><br/> 
                        </div>
                    </div>`,
                main.insertAdjacentHTML("afterbegin", html),
                hideElements(),
                getStatisticsResult(),
            ];
        }
    }
    while (NodeListItemGrid[count].style.backgroundColor == "red" || NodeListItemGrid[count].style.backgroundColor == "green") {
        if (count >= 4) {
            count = 0;
        } else {
            document.getElementById(count + 1).style.display = "none";
            count++;  
        }
    }
    
    document.querySelector(".count-question").textContent = `Вопрос: ${count + 1 }`;
   
    return [
        img = arr.map(obj =>`<img id="${obj.id}" src="${obj.img}" style="opacity:0"/>`).join(""),
        main.innerHTML = `<div class="divImagesBlock">${img}</div>`,
        document.getElementById(count + 1).style.opacity = "1",
        html = `<div class="divBlockHtml">
                    <div class = "pDiv"><p>${arr[count].question}</p></div>
                    <ol>${getHtmlAnswersFromArr()}</ol>
                </div>`,
       
        main.insertAdjacentHTML("beforeend", html),
        main.insertAdjacentElement("beforeend", divButtons),
        giveCorrectlyAnswer(),
        NodeListItemGrid[count].style.backgroundColor = "lightblue",
        NodeListItemGrid[count].style.border = "1px solid black",
    ];
}
function getStatisticsResult() {
    let key;
    let statisticCount=1
    arr.map(obj => { 
        key=obj.answers.map(item => {
            if (item.is_correct) {
                return `<li>${item.answer_text} 
                            <span style="color:green;"> (Эталон)</span>
                            <span style="color:red;">${item.your_answer || ""}</span>
                        </li> `;
              } else {
                return `<li>${item.answer_text}
                            <span style="color:red;">${item.your_answer || ""}</span>
                        </li>`;
              }
        });
        main.innerHTML += `<div class = "divBlockHtmlStatistic">
          <h3>Вопрос: ${statisticCount++}</h3>
          <img src = '${obj.img}'/>
          <div class = "pDiv"><p>${obj.question}</p></div>
          <ol>${key.join('')}</ol>
      </div>`;
    });
}
function clickByItemGrid(e) {
    for (let i = 0; i < NodeListItemGrid.length; i++) {
        if (NodeListItemGrid[i].style.backgroundColor != "red" && NodeListItemGrid[i].style.backgroundColor != "green"){
            NodeListItemGrid[i].style.backgroundColor = "lightgray";
            NodeListItemGrid[count].style.border = "";
        }
    }
    count = +e.target.textContent - 1;
    getHtml(arr);
}
NodeListItemGrid.forEach(item => {
    item.onclick = clickByItemGrid;
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
    console.log("count" + count);
    if (count > arr.length - 1) {
        NodeListItemGrid[count - 1].style.backgroundColor = "lightgray";
        NodeListItemGrid[count - 1].style.border = "";
        count = 0;
        getHtml(arr);
    } else {
        NodeListItemGrid[count - 1].style.backgroundColor = "lightgray";
        NodeListItemGrid[count - 1].style.border = "";
        getHtml(arr);
    }
}

function timer() {
    let time = 1200;
    let sum2 = result.reduce((sum, num) => sum + num, 0);
    function t() {
        let h;
        minutes = Math.floor(time / 60);
        seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        time--;
        h = `${minutes}:${seconds}`;
        if (minutes == 0 && seconds == 0) {
            let html;
            if (document.querySelector(".divBlockHtml")) {
                document.querySelector(".divBlockHtml").remove();
            }
            return [
                clearInterval(invalid),
                html = `<div class="divBlockHtml"> 
                <div class="timerBlockEnd">
                    <h2 style = "color:red;">Билет не сдан</h2>
                    <h3>Правильных ответов: ${sum2} из ${result.length}<h3/>
                    <p>У вас закончилось время: ${minutes}:${seconds}<p/>
                    <h3 class='exam-results'>Результаты тестирования АТУ:</h3><br/> 
                </div>
            </div>`,
        main.insertAdjacentHTML("afterbegin", html),
        hideElements(),
        getStatisticsResult(),
            ];
        }
        return timerP.innerHTML = h;
    }
    let invalid = setInterval(t, 1000);
    t();
}
timer();

function hideElements(){
        divButtons.style.display = "none",
        timerBlock.style.display = "none",
        gridBlock.style.display='none',
        document.querySelector(".count-question").style.display='none',
        document.getElementById(count+1).style.opacity='0',
        document.querySelector(".divBlockHtml").style.marginTop='20px'
}