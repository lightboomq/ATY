////////////////////////////////////--ГЛОБАЛЬНЫЙ МАССИВ--////////////////////////////////////////// 
import { ticket_1 } from "./ticket_1/ticket_1.js";
import { ticket_2 } from "./ticket_2/ticket_2.js";
import { ticket_3 } from "./ticket_3/ticket_3.js";

const container = document.querySelector(".container");
const main = document.querySelector(".main");
const ticketItemsBlock = document.querySelector(".ticket-items-block");
const timerSvg = document.querySelector('.timerSvg')
const btnComplete =  document.querySelector('.btn-complete')
const body = document.querySelector('body')
const examBtn = document.querySelector('.exam-btn')
const ticketExamBlock=document.querySelector('.ticket-and-exam-block')
const divButtons = document.querySelector(".divButtons");
let time;
let h;
let ticketItemsHtml = "";
let index = 0;
let str
let strHtml
let correctly;
let invalid
let result = [];
const timerBlock = document.querySelector(".timerBlock");
const timerP = document.querySelector(".timerP");
let minutes;
let seconds;
const globalArr = [
    ticket_1, ticket_2,
    ticket_3, 
];

let arr = localStorage.getItem('array')?JSON.parse(localStorage.getItem('array')):globalArr[index]

localStorage.getItem('container')?localStorage.getItem('container'):localStorage.setItem('container','none')
localStorage.getItem('main')?localStorage.getItem('container'):localStorage.setItem('main','none')
localStorage.getItem('ticketExamBlock')?localStorage.getItem('ticketExamBlock'):localStorage.setItem('ticketExamBlock','block')
localStorage.getItem('divButtons')?localStorage.getItem('divButtons'):localStorage.setItem('divButtons','none')
strHtml=localStorage.getItem('str')?localStorage.getItem('str'):''
container.style.display=localStorage.getItem('container')
main.style.display=localStorage.getItem('main')
ticketExamBlock.style.display=localStorage.getItem('ticketExamBlock')
divButtons.style.display=localStorage.getItem('divButtons')

for (let i = 0; i < globalArr.length; i++) {
  ticketItemsHtml += `<div class="ticket-items-html">Билет ${i + 1}</div>`;
}
ticketItemsBlock.insertAdjacentHTML("afterbegin", ticketItemsHtml);

let node = document.querySelectorAll(".ticket-items-html");

const clickByItemGlobalArr = (e) => {
  localStorage.setItem('container','block')
  localStorage.setItem('main','block')
  localStorage.setItem('ticketExamBlock','none')
  localStorage.setItem('divButtons','flex')

  container.style.display=localStorage.getItem('container')
  main.style.display=localStorage.getItem('main')
  ticketExamBlock.style.display=localStorage.getItem('ticketExamBlock')
  divButtons.style.display=localStorage.getItem('divButtons')

  str=e.target.textContent;
  strHtml=`Билет №${str[6]}`
  localStorage.setItem('str',strHtml)
  document.querySelector('.h2-block').style.display='none'
  index = Number(str[6]-1)
  divButtons.style.display = '';
  timerSvg.style.display = ''
  examBtn.style.display='none'
  localStorage.setItem('timer',2400)
  time=localStorage.getItem('timer')
  timer();
  arr = globalArr[index];
  localStorage.setItem('array',JSON.stringify(arr))
  document.querySelector('.count-ticket').textContent=`Билет ${index+1}`;
  getHtml(arr);
};

node.forEach((item) => {
  item.onclick = clickByItemGlobalArr;
});

examBtn.onclick=getRandomItemOfArrayWrapper


function getRandomItemOfArrayWrapper(){
  arr = []
  strHtml=`Экзамен`
  function getRandomItemOfArray(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    return Math.round(randomIndex);
  };    

  for (let i = 0; i <= 19; i++) {
    const ticketIndex = getRandomItemOfArray(globalArr);
    const question = globalArr[ticketIndex][i];
    arr.push(question);
  }
  time=2400
  timer();
  document.querySelector('.h2-block').style.display='none'
  document.querySelector('.count-ticket').textContent=`Экзамен`;
  document.querySelector('.count-ticket').style.color = 'red'
  ticketItemsBlock.style.display='none'
  divButtons.style.display = '';
  timerSvg.style.display = ''
  container.style.display='block'
  main.style.display='block'
  examBtn.style.display='none'
  getHtml(arr)
}

//////////////////////////////////////////////////////////////////////////////
document.querySelector(".btn-move").onclick = getNextQuestion;
const gridBlock = document.querySelector(".grid-block");

for (let i = 0; i < arr.length; i++) {
  gridBlock.innerHTML += `<div class="grid">${i + 1}</div>`;
}
let NodeListItemGrid = document.querySelectorAll(".grid");
let count = 0;

function getHtmlAnswersFromArr(arr) {
  let objKey;
  for (let i = -1; i < count; i++) {
    objKey = arr[count].answers.map(item => `<li class='liAnswer'>${item.answer_text}</li>`);
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
    if(strHtml=='Экзамен'){
      NodeListItemGrid[count].style.backgroundColor = "lightslategray";
      NodeListItemGrid[count].style.color = "white";
      correctly ? result.push(1) : result.push(0);
      getHtml(arr);
      return
    }

    if(strHtml==localStorage.getItem('str')){
      console.log(true);
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
                            <h2 class = "examInvalid">${strHtml} не сдан</h2>
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
                            <h2 style = "color:green;">${strHtml} сдан</h2>
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
  
  while (NodeListItemGrid[count].style.backgroundColor == "red" ||NodeListItemGrid[count].style.backgroundColor == "green"){
    if (count >= 19) {
        count = 0;
      } 
      else {
        document.getElementById(count + 1).style.display = "none";
        count++;
      }
    }

    while (NodeListItemGrid[count].style.backgroundColor == "lightslategray" ){
      if (count >= 19) {
        count = 0;
      } 
      else {
        document.getElementById(count + 1).style.display = "none";
        count++;
      }
    }
    document.querySelector(".count-question").textContent = `Вопрос: ${ count + 1 }`;
  return [
    img = arr.map(obj => `<img id="${obj.id}" src="${obj.img}" style="opacity:0"/>`).join(""),
    main.innerHTML = `<div class="divImagesBlock">${img}</div>`,
    document.getElementById(count + 1).style.opacity = "1",
    html = `<div class="divBlockHtml">
                    <div class = "pDiv"><p>${arr[count].question}</p></div>
                    <ol>${getHtmlAnswersFromArr(arr)}</ol>
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

  if(strHtml=='Экзамен'){
    for (let i = 0; i < NodeListItemGrid.length; i++) {
      if (NodeListItemGrid[i].style.backgroundColor != "lightslategray") {
        NodeListItemGrid[i].style.backgroundColor = "lightgray";
        NodeListItemGrid[count].style.border = "";
      }
    }
    count = +e.target.textContent - 1;
    getHtml(arr);
    return
  }
if(strHtml==localStorage.getItem('str')){
  for (let i = 0; i < NodeListItemGrid.length; i++) {
    if (NodeListItemGrid[i].style.backgroundColor != "red" && NodeListItemGrid[i].style.backgroundColor != "green") {
      NodeListItemGrid[i].style.backgroundColor = "lightgray";
      NodeListItemGrid[count].style.border = "";
    }
  }
  count = +e.target.textContent - 1;
  getHtml(arr);
  return
}
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
  time=localStorage.getItem('timer')
  let sum2 = result.reduce((sum, num) => sum + num, 0);
  function t() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    time--;
    h = `${minutes}:${seconds}`;
    if (minutes==0 && seconds==0) {
      let html;
      if (document.querySelector(".divBlockHtml")) {
        document.querySelector(".divBlockHtml").remove();
      }
      return [
        clearInterval(invalid),
        html = `<div class="divBlockHtml"> 
                <div class="timerBlockEnd">
                    <h2 style = "color:red;">${strHtml} не сдан</h2>
                    <h3>Правильных ответов: ${sum2} из ${result.length}<h3/>
                    <p>У вас закончилось время: ${minutes}:${seconds}<p/>
                    <h3 class='exam-results'>Результаты тестирования АТУ:</h3><br/> 
                </div>
            </div>`,
        main.insertAdjacentHTML("afterbegin", html),
        hideElements(),
        //getStatisticsResult(),
      ];
    }
    localStorage.setItem('timer',time)
    return timerP.innerHTML = h;
  }
   invalid = setInterval(t, 1000);
  t();
}

btnComplete.onclick=function(){
  let completeHtml
  let blockAllElements
  let btnCompleteYes
  let btnCompleteNo
  blockAllElements=`<div class='block-all-elements'></div>`
  completeHtml=`<div class='complete-block'>
                  <h3>Завершить тестирование?</h3>
                  <div class="complete-btn-block">
                    <button class="btn-yes">Да</button>
                    <button class="btn-no">Нет</button>
                  </div>`
  body.insertAdjacentHTML('beforeend',blockAllElements)
  main.insertAdjacentHTML('beforeend',completeHtml)
  btnCompleteYes=document.querySelector('.btn-yes')
  btnCompleteNo=document.querySelector('.btn-no')
  
  btnCompleteYes.onclick=function(e){
    if(e.target.textContent=='Да'){
      localStorage.clear()
      location.reload();
      return false
    }
  };
  btnCompleteNo.onclick=function(e){
    if(e.target.textContent=='Нет'){
      document.querySelector('.block-all-elements').remove()
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
localStorage.getItem('array')?getHtml(arr):false
if(localStorage.getItem('timer')){
  timerSvg.style.display = ''
  timer()
}
else{
  false
}