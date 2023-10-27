////////////////////////////////////--ГЛОБАЛЬНЫЙ МАССИВ--////////////////////////////////////////// 
import { ticket_1 } from "./ticket_1/ticket_1.js";
import { ticket_2 } from "./ticket_2/ticket_2.js";
import { ticket_3 } from "./ticket_3/ticket_3.js";

const container = document.querySelector(".container");
const ticketItemsBlock = document.querySelector(".ticket-items-block");
const timerSvg = document.querySelector('.timerSvg')
const btnComplete =  document.querySelector('.btn-complete')
const body = document.querySelector('body')
let time;
let ticketItemsHtml = "";
let index = 0;
let str
const globalArr = [
    ticket_1, ticket_2,
    ticket_3, 
];
let arr = globalArr[index];
container.style.display='none';

for (let i = 0; i < globalArr.length; i++) {
  ticketItemsHtml += `<div class="ticket-items-html">Билет ${i + 1}</div>`;
}
ticketItemsBlock.insertAdjacentHTML("afterbegin", ticketItemsHtml);
let node = document.querySelectorAll(".ticket-items-html");

const clickByItemGlobalArr = (e) => {
  document.querySelector('.h2-block').style.display='none'
  ticketItemsBlock.style.display='none'
  str=e.target.textContent;
  index = Number(str[6]-1)
  divButtons.style.display = '';
  timerSvg.style.display = ''
  time=1200
  timer();
  arr = globalArr[index];
  container.style.display='block'
  document.querySelector('.count-ticket').textContent=`Билет ${index+1}`;
  getHtml(arr);
};
node.forEach((item) => {
  item.onclick = clickByItemGlobalArr;
});

//////////////////////////////////////////////////////////////////////////////
let main = document.querySelector(".main");
let divButtons = document.querySelector(".divButtons");
document.querySelector(".btn-move").onclick = getNextQuestion;
const gridBlock = document.querySelector(".grid-block");
const timerBlock = document.querySelector(".timerBlock");
const timerP = document.querySelector(".timerP");

let minutes;
let seconds;
let correctly;
let invalid
let result = [];

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
  let confirm
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
                        <div class='img-close-block'>
                          <img style="width:40px; height:40px; cursor: pointer;" class='close-img' src= "./img/close-img.svg"/>
                        </div>
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
        document.querySelector('.close-img').onclick=function(){
        confirm=window.confirm('Завершить просмотр результа?')
        confirm?location.reload():''
        }
      ];
    } else {
      return [
        html = `<div class="divBlockHtml"> 
                        <div class='img-close-block'>
                          <img style="width:40px; height:40px; cursor: pointer;" class='close-img' src= "./img/close-img.svg"/>
                        </div>
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
        document.querySelector('.close-img').onclick=function(){
        confirm=window.confirm('Завершить просмотр результа?')
        confirm?location.reload():''
        }
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
    document.querySelector('.count-ticket').style.display='none'
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
    if (!minutes && !seconds ) {
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
   invalid = setInterval(t, 1000);
  t();
}

btnComplete.onclick=function(){
  let completeHtml
  let btnCompleteYes
  let btnCompleteNo
  completeHtml=`<div class='complete-block'>
    <h3>Завершить тестирование?</h3>
    <div class="complete-btn-block">
      <button class="btn-yes">Да</button>
      <button class="btn-no">Нет</button>
    </div>
  </div>`
  main.insertAdjacentHTML('beforeend',completeHtml)
  btnCompleteYes=document.querySelector('.btn-yes')
  btnCompleteNo=document.querySelector('.btn-no')
  body.style.backgroundColor='#D0D0D0'
  btnCompleteYes.onclick=function(e){
  
    if(e.target.textContent=='Да'){
      location.reload();
      return false
    }
  };
  btnCompleteNo.onclick=function(e){
    if(e.target.textContent=='Нет'){
      body.style.backgroundColor='white'
      document.querySelector('.complete-block').remove()
    }
  };
  
}
function hideElements() {
    divButtons.style.display = "none",
    timerBlock.style.display = "none",
    gridBlock.style.display = "none",
    document.querySelector(".count-question").style.display = "none",
    document.getElementById(count + 1).style.opacity = "0",
    document.querySelector(".divBlockHtml").style.marginTop = "20px";
}
