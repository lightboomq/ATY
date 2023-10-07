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
        img: "./img/5.jpg",
        isQuastion:
            "Эти знаки предупреждают Вас:",
        answers: {
            "О наличии через 500 м опасных поворотов": false,
            "О том, что на расстоянии 150 - 300 м за дорожным знаком начнётся участок дороги протяженностью 500 м с опасными поворотами": true,
            "О том, что сразу за знаком начнется участок протяженностью 500 м с опасными поворотами": false,
        },
    },
    {
        img: "./img/6.jpg",
        isQuastion:
            "Кто должен уступить дорогу?",
        answers: {
            "Водитель грузового автомобиля": false,
            "Водитель легкового автомобиля": true,
        },
    },
    {
        img: "./img/7.jpg",
        isQuastion:
            "Вам можно выполнить разворот:",
        answers: {
            "Только по траектории А": false,
            "Только по траектории Б": true,
            "По любой траектории из указанных": false,
        },
    },
    {
        img: "./img/8.jpg",
        isQuastion:
            "По какой полосе проезжей части разрешено движение в населённом пункте, если по техническим причинам транспортное средство не может развивать скорость более 40 км/ч?",
        answers: {
            "Только по крайней правой": true,
            "Только по крайней левой": false,
            "По любой, кроме крайней левой": false,
        },
    },
    {
        img: "./img/9.jpg",
        isQuastion:
            "Разрешается ли Вам остановка для посадки пассажира в этом месте?",
        answers: {
            "Разрешается": false,
            "Запрещается": false,
            "Разрешается, если при этом не будет создано помех для движения маршрутных транспортных средств": true,
        },
    },
    {
        img: "./img/10.jpg",
        isQuastion:
            "Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?",
        answers: {
            "Проедете перекресток первым": false,
            "Уступите дорогу только встречному автомобилю": false,
            "Уступите дорогу только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом": true,
            "Уступите дорогу обоим транспортным средствам":false
        },
    },
    {
        img: "./img/11.jpg",
        isQuastion:
            "Кому Вы должны уступить дорогу при повороте направо?",
        answers: {
            "Только пешеходу, переходящему проезжую часть по нерегулируемому пешеходному переходу": true,
            "Только пешеходам, переходящим проезжую часть, на которую Вы поворачиваете": false,
            "Всем пешеходам": false,
        },
    },
    {

        img: "./img/12.jpg",
        isQuastion:
            "Как Вам следует поступить при выполнении разворота?",
        answers: {
            "Проехать перекресток первым": false,
            "Уступить дорогу только легковому автомобилю": true,
            "Уступить дорогу обоим транспортным средствам": false,
        },
    },
    {

        img: "./img/8.jpg",
        isQuastion:
            "Какие из перечисленных действий запрещены водителям механических транспортных средств в жилой зоне?",
        answers: {
            "Стоянка с работающим двигателем": false,
            "Сквозное движение": false,
            "Учебная езда":false,
            "Все перечисленные действия": true,
        },
    },
    {

        img: "./img/8.jpg",
        isQuastion:
            "В каком случае разрешается эксплуатация транспортного средства?",
        answers: {
            "На транспортном средстве спереди установлены световые приборы с огнями оранжевого цвета": true,
            "Рассеиватели внешних световых приборов отсутствуют или повреждены": false,
            "Установлены не предусмотренные конструкцией светового прибора оптические элементы":false,
            "Установлены не предусмотренные конструкцией светового прибора оптические элементы":false 
        },
    },
    {
        img: "./img/13.jpg",
        isQuastion:
            "Разрешено ли Вам обогнать мотоцикл?",
        answers: {
            "Запрещено": false,
            "Разрешено": true,
            "Разрешено только после проезда перекрёстка": false,
        },
    },
    {

        img: "./img/8.jpg",
        isQuastion:
            "Как следует расположить руки на грудной клетке пострадавшего при проведении сердечно-легочной реанимации?",
        answers: {
            "Основания ладоней обеих кистей, взятых в «замок», должны располагаться на грудной клетке на два пальца выше мечевидного отростка так, чтобы большой палец одной руки указывал в сторону левого плеча пострадавшего, а другой – в сторону правого плеча. Руки выпрямляются в локтевых суставах.": false,
            "Давление руками на грудину выполняют основанием ладони одной руки, расположенной на грудной клетке на два пальца выше мечевидного отростка. Рука выпрямлена в локтевом суставе. Направление большого пальца не имеет значения.": false,
            "Основание ладони одной руки накладывают на середину грудной клетки на два пальца выше мечевидного отростка, вторую руку накладывают сверху, пальцы рук берут в замок. Руки выпрямляются в локтевых суставах, большие пальцы рук указывают на подбородок и живот. Надавливания должны проводиться без резких движений.": true,
        },
    },
    {

        img: "./img/14.jpg",
        isQuastion:
            "Сколько проезжих частей имеет данная дорога?",
        answers: {
            "Одну": true,
            "Две": false,
            "Четыре": false,
        },
    },
    {

        img: "./img/15.jpg",
        isQuastion:
            "При наличии какого знака водитель должен уступить дорогу, если встречный разъезд затруднен?",
        answers: {
            "Только В": false,
            "А и В": true,
            "Б и В": false,
            "Б и Г":false
        },
    },
    {

        img: "./img/16.jpg",
        isQuastion:
            "Поднятая вверх рука водителя мотоцикла является сигналом, информирующим Вас о его намерении:",
        answers: {
            "Продолжить движение прямо": false,
            "Повернуть направо": false,
            "Снизить скорость, чтобы остановиться и уступить дорогу легковому автомобилю": true,
        },
    },
    {
        img: "./img/17.jpg",
        isQuastion:
            "В каких направлениях Вам можно продолжить движение по левой полосе на грузовом автомобиле с разрешенной максимальной массой не более 3,5 т?",
        answers: {
            "Только прямо": false,
            "Прямо и направо": false,
            "Прямо, налево и в обратном направлении": true,
        },
    }
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
    return `${nKey}`;
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
    let html
        if(document.querySelector('.div-remove')){
            document.querySelector('.div-remove').remove()
        }
    return [
        html=
        `<div class = "div-remove">
            <h3>Вопрос: ${count+1}</h3>
            <img src = '${arr[count].img}'/>
            <div class = "pDiv"><p>${arr[count].isQuastion}</p></div>
            <ol>${objAnswer()}</ol>
        </div>`,    
        
        main.insertAdjacentHTML('beforeend',html),
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

