////////////////////////////////////--ГЛОБАЛЬНЫЙ МАССИВ--////////////////////////////////////////// 
import { ticket_1 } from "./ticket_1/ticket_1.js";
import { ticket_2 } from "./ticket_2/ticket_2.js";
import { ticket_3 } from "./ticket_3/ticket_3.js";
import { ticket_4 } from "./ticket_4/ticket_4.js";
import { ticket_5 } from "./ticket_5/ticket_5.js";
import { ticket_6 } from "./ticket_6/ticket_6.js";
import { ticket_7 } from "./ticket_7/ticket_7.js";
import { ticket_8 } from "./ticket_8/ticket_8.js";
import { ticket_9 } from "./ticket_9/ticket_9.js";
import { ticket_10} from "./ticket_10/ticket_10.js";


let container = document.querySelector(".container");
let ticketItemsBlock = document.querySelector(".ticket-items-block");
let h3AndTicketsItemsBlock = document.querySelector(".h3_and_ticket-items-block")
let timerSvg = document.querySelector('.timerSvg')


let time;
let ticketItemsHtml = "";
let index = 0;

const globalArr = [
    ticket_1, ticket_2,
    ticket_3, 
];
let arr = globalArr[index];
container.style.display='none';

for (let i = 0; i < globalArr.length; i++) {
  ticketItemsHtml += `<div class="ticket-items-html">${i + 1}</div>`;
}
ticketItemsBlock.insertAdjacentHTML("afterbegin", ticketItemsHtml);
let node = document.querySelectorAll(".ticket-items-html");

const clickByItemGlobalArr = (e) => {
  divButtons.style.display = "";
  timerSvg.style.display=''
  time=1200
  timer();
  index = e.target.textContent - 1;
  arr = globalArr[index];
  h3AndTicketsItemsBlock.style.display='none'
  container.style.display='block'
  getHtml(arr);
};
node.forEach((item) => {
  item.onclick = clickByItemGlobalArr;
});
//////////////////////////////////////////////////////////////////////////////
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
  for (let i = -1; i < count; i++) {
    objKey = globalArr[index][count].answers.map(item => `<li class='liAnswer'>${item.answer_text}</li>`);
  }
  return objKey.join(" ");
}


getHtml(arr);

function giveCorrectlyAnswer() {
  let answers = document.querySelectorAll("li");
  answers.forEach((answers) => {
    answers.onclick = clickByAnswer;
  });
  function clickByAnswer(e) {
    let arrAnswers = [];
    let indexArrAnswers;
    for (let i = 0; i < answers.length; i++) {
      arrAnswers.push(answers[i].textContent);
    }
    indexArrAnswers = arrAnswers.indexOf(e.target.textContent);
    arr[count].answers[indexArrAnswers].your_answer = "(Ваш ответ)";
    correctly = arr[count].answers[indexArrAnswers].is_correct;
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
  if (result.length >= 20) {
    let sum = result.reduce((sum, num) => sum + num, 0);
    if (result.length - sum >= 2) {
      return [
        html = `<div  class="divBlockHtml"> 
                        <div class="timerBlockEnd">
                            <h2 class = "examInvalid">Билет № ${index+1} не сдан</h2>
                            <h3>Правильных ответов: ${sum} из ${result.length}<h3/>
                            <p>Оставшееся время тестирования: ${minutes}:${seconds}<p/>
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
                            <h2 style = "color:green;">Билет № ${index+1} сдан</h2>
                            <h3>Правильных ответов: ${sum} из ${result.length}<h3/>
                            <p>Оставшееся время тестирования: ${minutes}:${seconds}<p/>
                            <h3 class='exam-results'>Результаты тестирования АТУ:</h3><br/> 
                        </div>
                    </div>`,
        main.insertAdjacentHTML("afterbegin", html),
        hideElements(),
        getStatisticsResult(),
      ];
    }
  }
  while (
    NodeListItemGrid[count].style.backgroundColor == "red" ||
    NodeListItemGrid[count].style.backgroundColor == "green"
  ) {
    if (count >= 19
      ) {
      count = 0;
    } else {
      document.getElementById(count + 1).style.display = "none";
      count++;
    }
  }

  document.querySelector(".count-question").textContent = `Вопрос: ${
    count + 1
  }`;
  
  return [
    img = arr.map(obj => `<img id="${obj.id}" src="${obj.img}" style="opacity:0"/>`).join(""),
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
  let statisticCount = 1;
  let help
  let is_correctTrue
 
  arr.map(obj => {
    is_correctTrue=obj.answers.findIndex(is_correctTrue=>is_correctTrue.is_correct==true);
    key = obj.answers.map(item => {
      if(item.your_answer=='(Ваш ответ)' && item.is_correct==false){
         help = `<div class="helpBlock">
          <h4>Правильный ответ: ${is_correctTrue+1}</h4>
          <p>${obj.help}</p>
        </div>` 
      }
      else if(item.your_answer=='(Ваш ответ)' && item.is_correct==true){
        help=''
      }
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
          <ol>${key.join("")}</ol>
          ${help}
      </div>`;
  });
}

function clickByItemGrid(e) {
  for (let i = 0; i < NodeListItemGrid.length; i++) {
    if (
      NodeListItemGrid[i].style.backgroundColor != "red" &&
      NodeListItemGrid[i].style.backgroundColor != "green"
    ) {
      NodeListItemGrid[i].style.backgroundColor = "lightgray";
      NodeListItemGrid[count].style.border = "";
    }
  }
  count = +e.target.textContent - 1;
  getHtml(arr);
}
NodeListItemGrid.forEach((item) => {
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
                    <h2 style = "color:red;">Билет № ${index+1} не сдан</h2>
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


function hideElements() {
    divButtons.style.display = "none",
    timerBlock.style.display = "none",
    gridBlock.style.display = "none",
    document.querySelector(".count-question").style.display = "none",
    document.getElementById(count + 1).style.opacity = "0",
    document.querySelector(".divBlockHtml").style.marginTop = "20px";
}
