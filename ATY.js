import { arr } from "./arr.js";
let container = document.querySelector(".container")
let main = document.querySelector(".main");
let divButtons = document.querySelector(".divButtons");
document.querySelector(".btn-move").onclick = getNextQuestion;
let gridBlock = document.querySelector(".grid-block");
let timerBlock = document.querySelector(".timerBlock")
let timerP = document.querySelector('.timerP')
let minutes; 
let seconds

const result = []

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
        correctly==true?result.push(1) : result.push(0);
        correctly==true?NodeListItemGrid[count].style.backgroundColor = "green" : NodeListItemGrid[count].style.backgroundColor = "red";
        count>=19 ? count=0 : count++;
        getHtml(arr);
    }
}

// // arr.map(obj=>{console.log(obj.img)
// //     console.log(obj.isQuastion)
// //     Object.keys(obj.answers).map(item=>console.log(item));
// // }   
// )
function getStatisticsResult(){
    let nkey = ''
    let statisticCount = 1
    console.log(nkey);
    arr.map(obj=>{
        nkey=Object.keys(obj.answers).map(item=>`<li>${item}</li>`)
        main.innerHTML+=`<div class = "divBlockHtml">
            <h3>Вопрос: ${statisticCount++}</h3>
            <img src = '${obj.img}'/>
            <div class = "pDiv"><p>${obj.isQuastion}</p></div>
            <ol>${nkey}</ol>
        </div>`;
    }) 
}

function getHtml(arr) {
    let html;
    if (document.querySelector(".divBlockHtml")) {
        document.querySelector(".divBlockHtml").remove();
    }
    if(result.length>=2){ 
        let sum = result.reduce((sum,num)=>sum+num,0);
        if(result.length-sum>=1){
            return [ 
            html = `<div class="divBlockHtml"> 
                        <div class="timerBlockEnd">
                            <h2 class = "examInvalid">Экзамен не сдан</h2>
                            <h2>😔</h2>
                            <h3>Правильных ответов: ${sum} из ${result.length}<h3/>
                            <p>Время сдачи экзамена: ${minutes}:${seconds}<p/>
                            <h3>Результаты экзамена АТУ:</h3><br/>
                        </div>
                    </div>`,
                    main.insertAdjacentHTML("afterbegin", html),
                    divButtons.style.display = 'none',
                    timerBlock.style.display = 'none',  
                    getStatisticsResult(),  
        ]
        }
        else{
            return [
                html=`<div class="divBlockHtml">
                        <h3>Вашь результат ${sum}</h3>
                    </div>`,
                    main.insertAdjacentHTML("afterbegin", html),
                    divButtons.style.display = 'none',
            ]
        }
    }
    while (NodeListItemGrid[count].style.backgroundColor == "red" || NodeListItemGrid[count].style.backgroundColor == "green"){
        count>=19?count=0 : count++;
    }
    return [
        html = `<div class="divBlockHtml">
                    <h3>Вопрос: ${count + 1}</h3>
                    <img src = '${arr[count].img}'/>
                    <div class = "pDiv"><p>${arr[count].isQuastion}</p></div>
                    <ol>${getHtmlAnswersFromArr()}</ol>
                </div>`,
        main.insertAdjacentHTML("afterbegin", html),
        main.insertAdjacentElement("beforeend", divButtons),
        giveCorrectlyAnswer(),
    ];
    
}

function clickByNum(e) {
    count = +e.target.textContent - 1;
    if (NodeListItemGrid[count].style.backgroundColor === "red" || NodeListItemGrid[count].style.backgroundColor === "green") {
        return false;
    }
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
}
;
function timer(){
    let time = 1200
    function t(){
        let h 
        minutes = Math.floor(time/60)
        seconds = time % 60
        seconds = seconds < 10 ? "0" + seconds: seconds
        time--
        h = `${minutes}:${seconds}`;
       if(minutes==0 && seconds == 0){
        let html
        if (document.querySelector(".divBlockHtml")) {
            document.querySelector(".divBlockHtml").remove();
        }
            return [
                clearInterval(invalid),
                html=`<div class="divBlockHtml">
                        <h3>Результаты экзамена АТУ</h3><br/>
                        <h3 class = "examInvalid">Экзамен не сдан! У Вас закончилось время</h3>
                    </div>`,
                    main.insertAdjacentHTML('afterbegin',html),false,
                    divButtons.style.display = 'none',
                    gridBlock.style.display = 'none',
                    document.querySelector('.examAty').style.display = 'none'
            ]
       }
        return timerP.innerHTML=h
    }
    let invalid=setInterval(t,1000)
    
    t()
}
timer()
