let main = document.querySelector(".main");
let divButtons = document.createElement("div");
divButtons.classList.add("divButtons");
let button1 = document.createElement("button");
button1.classList.add("btn-back");
let button2 = document.createElement("button");
button2.classList.add("btn-move");
divButtons.insertAdjacentElement("afterbegin", button2);
divButtons.insertAdjacentElement("afterbegin", button1);
button1.textContent = "Предыдущий вопрос";
button2.textContent = "Следующий вопрос";

let lengthArr = document.createElement("div");
let arr = [
    {
        img: "./img/1.jpg",
        isQuastion:
            "Сколько полос для движения имеет проезжая часть данной дороги?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/2.jpg",
        isQuastion:
            "Вы буксируете неисправный автомобиль. По какой полосе Вам можно продолжить движение в населенном пункте?",
        answers: {
            "Только по правой": true,
            "Только по левой": false,
            "По любой": false,
        },
    },
    {
        img: "./img/3.jpg",
        isQuastion: "Каким транспортным средствам разрешено движение прямо?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {
        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
    {

        img: "./img/4.jpg",
        isQuastion:
            "Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить указатели правого поворота?",
        answers: {
            "Одну полосу": false,
            "Две полосы": true,
            "Три полосы": false,
        },
    },
];

let count = 0;
let arrChoise = document.querySelector(".array-choise");

for (let i = 0; i < arr.length; i++) {
    arrChoise.innerHTML += `<div class="grid">${i + 1}</div>`;
}
function objAnswer() {
    let nKey = "";
    for (let key of Object.keys(arr[count].answers)) {
        nKey += `<li>${key}</li>`;
    }
    return `<ol>${nKey}</ol>`;
}
function answer() {
    let li = document.querySelectorAll("li");
    li.forEach((item) => {
        item.onclick = handleClickLi;
    });
    function handleClickLi(e) {
        let correctly
        correctly=arr[count].answers[e.target.textContent]
        if(correctly==true){
            arrChoiseNum[count].style.backgroundColor='green'
        }
        else{
            arrChoiseNum[count].style.backgroundColor='red'
        }
        count++
        
        block(arr)
    }
}

function block(arr) {
    main.innerHTML = "";
    return [
        main.innerHTML=`<h3>Вопрос: ${count+1}</h3>
        <img src = '${arr[count].img}'/>
        <div class = "pDiv"><p>${arr[count].isQuastion}</p></div>`,
        objAnswer(),
        main.insertAdjacentHTML("beforeend", objAnswer()),
        main.insertAdjacentElement("beforeend", divButtons),
        answer(),
    ];
}

block(arr);

let a = "";
let b = null;

let move = function () {
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
};

let back = function () {
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
};

main.insertAdjacentElement("beforeend", divButtons);
document.querySelector(".btn-move").onclick = move;
document.querySelector(".btn-back").onclick = back;


let arrChoiseNum = document.querySelectorAll(".grid");
function handleClick(e) {
    count = +e.target.textContent - 1;
    block(arr);
}
arrChoiseNum.forEach((item) => {
    item.onclick = handleClick;
});

arrChoiseNum.forEach((item=>{
    console.log(item);
}))