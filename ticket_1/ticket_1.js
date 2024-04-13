const ticket_1 = [
    {
        id:1,
        img: "./img/0.jpg",
        question:"В каком случае водитель совершит вынужденную остановку?",  
        answers: [
            {
                "answer_text": "Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу",
                "is_correct": false,
            },
            {
                "answer_text": "Остановившись на проезжей части из-за технической неисправности транспортного средства",
                "is_correct": true,  
            },
            {
                "answer_text": "В обоих перечисленных случаях",
                "is_correct": false,
            },
        ],
        help:"«Вынужденная остановка» - прекращение движения транспортного средства, связанное с его технической неисправностью, опасностью, создаваемой перевозимым грузом, состоянием водителя (пассажира) или появления препятствия на дороге. (Пункт 1.2 ПДД, термин «Вынужденная остановка»)"
    },
    {
        id:2,
        img: "./ticket_1/img/2.jpg",
        question: "Разрешен ли Вам поворот на дорогу с грунтовым покрытием?",
        answers: [
            {
                "answer_text": "Разрешен",
                "is_correct": true,
            },
            {
                "answer_text": "Разрешен только при технической неисправности транспортного средства",
                "is_correct": false,
            },
            {
                "answer_text": "Запрещен",
                "is_correct": false,
            },
        ],
        help:"Впереди по ходу Вашего движения предупреждающий знак 1.11.2 «Опасный поворот» и знаки 1.34.2 «Направление поворота», которые указывают направление движения на закруглении дороги малого радиуса с ограниченной видимостью. Ничего, что бы Вам запрещало поворот на дорогу с грунтовым покрытием, нет. По Вашему желанию поворачиваете направо. («Дорожные знаки»)."
    },
    {
        id:3,
        img: "./ticket_1/img/3.jpg",
        question: "Можно ли Вам остановиться в указанном месте для посадки пассажира?",
        answers: [
            {
                "answer_text": "Можно",
                "is_correct": true,
            },
            {
                "answer_text": "Можно, если Вы управляете такси",
                "is_correct": false,

            },
            {
                "answer_text": "Нельзя",
                "is_correct": false,
            },
        ],
        help:"Знак 3.28 «Стоянка запрещена» не запрещает производить остановку. В указанном месте Вам совершить остановку можно. («Дорожные знаки»)",
    },
    {
        id:4,
        img: "./ticket_1/img/4.jpg",
        question:"Какие из указанных знаков запрещают движение водителям мопедов?",
        answers: [
            {
                "answer_text": "Только А",
                "is_correct": false,
            },
            {
                "answer_text": "Только Б",
                "is_correct": false,
            },
            {
                "answer_text": "В и Г",
                "is_correct": false,
            },
            {
                "answer_text": "Все",
                "is_correct": true,
            },
        ],
        help:"Запрещают движение водителям мопедов все знаки из перечисленных: А – 4.4.1 «Велосипедная дорожка»; Б – 5.14.1 «Полоса для маршрутных транспортных средств»; В – 4.5.2 «Пешеходная и велосипедная дорожка с совмещенным движением»; Г – 4.5.4 «Пешеходная и велосипедная дорожка с разделением движения». (Дорожные знаки) Только знак 5.14.2 «Полоса для велосипедистов» разрешает движение мопедов, но он не представлен в вопросе Пункт 24.7 ПДД",
    },
    {
        id:5,
        img: "./ticket_1/img/5.jpg",
        question:"Вы намерены повернуть налево. Где следует остановиться, чтобы уступить дорогу легковому автомобилю?",
        answers: [
            {
                "answer_text": "Перед знаком",
                "is_correct": false,
            },
            {
                "answer_text": "Перед перекрестком у линии разметки",
                "is_correct": true,
            },
            {
                "answer_text": "На перекрестке перед прерывистой линией разметки",
                "is_correct": false,
            },
            {
                "answer_text": "В любом месте по усмотрению водителя",
                "is_correct": false,
            },
        ],
        help:"Согласно знаку 2.4 «Уступите дорогу» водители должны пропускать транспорт, движущийся по пересекаемой дороге. Разметка 1.13 в виде треугольников указывает место, где при необходимости следует остановиться. У Вас такая необходимость есть, так как при повороте налево Вы уступаете дорогу легковому автомобилю. («Дорожные знаки», «Горизонтальная разметка»)",
    },
    {
        id:6,
        img: "./img/0.jpg",
        question:"Что означает мигание зелёного сигнала светофора?:",
        answers: [
            {
                "answer_text": "Предупреждает о неисправности светофора ",
                "is_correct": false,
            },
            {
                "answer_text": "Разрешает движение и информирует о том, что вскоре будет включен запрещающий сигнал",
                "is_correct": true,
            },
            {
                "answer_text": "Запрещает дальнейшее движение",
                "is_correct": false,
            },
        ],
        help:"Длительность мигания зелёного сигнала светофора обычно составляет 3-4 с. Это позволяет водителю заблаговременно, в зависимости от конкретных условий, принять решение: 1) продолжить движение с прежней скоростью; 2) несколько увеличить скорость; 3) начать снижение скорости вплоть до остановки. (Пункт 6.2 ПДД)",
    },
    {
        id:7,
        img: "./img/0.jpg",
        question:"Водитель обязан подавать сигналы световыми указателями поворота (рукой):",
        answers: [
            {
                "answer_text": "Перед началом движения или перестроением",
                "is_correct": false,
            },
            {
                "answer_text": "Перед поворотом или разворотом",
                "is_correct": false,
            },
            {
                "answer_text": "Перед остановкой",
                "is_correct": false,
            },
            {
                "answer_text": "Во всех перечисленных случаях",
                "is_correct": true,
            },
        ],
        help:"Перед началом движения, перестроением, поворотом (разворотом) и остановкой водитель обязан подавать сигналы световыми указателями поворота соответствующего направления, а если они отсутствуют или неисправны – рукой. При выполнении манёвра не должны создаваться опасность для движения, а также помехи другим участникам дорожного движения. (Пункт 8.1 ПДД)",
    },
    {
        id:8,
        img: "./ticket_1/img/8.jpg",
        question:"Как Вам следует поступить при повороте направо?",
        answers: [
            {
                "answer_text": "Перестроиться на правую полосу, затем осуществить поворот",
                "is_correct": false,
            },
            {
                "answer_text": "Продолжить движение по второй полосе до перекрёстка, затем повернуть",
                "is_correct": false,
            },
            {
                "answer_text": "Возможны оба варианта действий",
                "is_correct": true,
            },
        ],
        help:"Разметка разрешает поворот направо с обеих полос, поэтому возможны оба варианта действий. В таких случаях, выполняя поворот на перекрёстке, соблюдайте избранную Вами рядность. («Горизонтальная разметка» 1.18, пункт 8.5 ПДД)",
    },
    {
        id:9,
        img: "./ticket_1/img/9.jpg",
        question:"По какой траектории Вам разрешено выполнить разворот?",
        answers: [
            {
                "answer_text": "Только по А",
                "is_correct": true,
            },
            {
                "answer_text": "Только по Б",
                "is_correct": false,
            },
            {
                "answer_text": "По любой из указанных",
                "is_correct": false,
            },
        ],
        help:"Выезд с пересечения проезжих частей должен быть выполнен на «свою» сторону, т.е. исходя из правостороннего движения без выезда на сторону встречного движения. Двигаясь по траектории «Б», Вы совершаете встречное движение по пересекаемой дороге, что крайне опасно, так как можете произвести лобовое столкновение с автомобилем, приближающимся слева. Развернуться следует по траектории «А». (Пункт 8.6 ПДД)",
    },
    {
        id:10,
        img: "./ticket_1/img/10.jpg",
        question:"С какой скоростью Вы можете продолжить движение вне населённого пункта по левой полосе на легковом автомобиле?",
        answers: [
            {
                "answer_text": "Не более 50 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "Не менее 50 км/ч и не более 70 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "Не менее 50 км/ч и не более 90 км/ч",
                "is_correct": true,
            },
        ],
        help:"Над левой полосой висит знак 4.6 «Ограничение минимальной скорости» с табличкой 8.14 «Полоса движения», указывающей полосу движения, на которую распространяется действие знака. Скорость движения по левой полосе не должна быть менее 50 км/ч и не должна превышать допустимой для легковых автомобилей вне населённых пунктов, т.е. не более 90 км/ч. («Дорожные знаки», пункт 10.3 ПДД)",
    },
    {
        id:11,
        img: "./ticket_1/img/11.jpg",
        question:"Можно ли водителю легкового автомобиля выполнить опережение грузовых автомобилей вне населенного пункта по такой траектории?",
        answers: [
            {
                "answer_text": "Можно",
                "is_correct": true,
            },
            {
                "answer_text": "Можно, если скорость грузовых автомобилей менее 30 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "Нельзя",
                "is_correct": false,
            },
        ],
        help:"На дорогах с двусторонним движением, имеющих четыре и более полос для движения обгон запрещён. В таких ситуациях можно совершать только опережение. Соблюдая правила маневрирования водитель легкового автомобиля на данном участке дороги может совершать опережение любых транспортных средств по различным траекториям включая и указанную. (Пункт 9.2 ПДД)",
    },
    {
        id:12,
        img: "./ticket_1/img/12.jpg",
        question:"В каком случае водителю разрешается поставить автомобиль на стоянку в указанном месте?",
        answers: [
            {
                "answer_text": "Только если расстояние до сплошной линии разметки не менее 3 м ",
                "is_correct": false,
            },
            {
                "answer_text": "Только если расстояние до края пересекаемой проезжей части не менее 5 м",
                "is_correct": false,
            },
            {
                "answer_text": "При соблюдении обоих перечисленных условий",
                "is_correct": true,
            },
        ],
        help:"Водитель не нарушает правила остановки и стоянки. Расстояние до края проезжей части, до сплошной линии разметки соблюдается – не менее допустимых. Остановка и стоянка за пешеходным переходом также допустима. Правильный ответ – при соблюдении обоих перечисленных условий. (Пункт 12.4 ПДД)",
    },
    {
        id:13,
        img: "./ticket_1/img/13.jpg",
        question:"При повороте направо Вы должны уступить дорогу:",
        answers: [
            {
                "answer_text": "Только велосипедисту",
                "is_correct": false,
            },
            {
                "answer_text": "Только пешеходам",
                "is_correct": false,
            },
            {
                "answer_text": "Пешеходам и велосипедисту",
                "is_correct": true,
            },
            {
                "answer_text": "Никому",
                "is_correct": false,
            },
        ],
        help:"При повороте направо или налево водитель обязан уступить дорогу пешеходам, переходящим проезжую часть дороги, на которую он поворачивает, лицам, использующим для передвижения средства индивидуальной мобильности (далее СИМ) и велосипедистам, независимо от того, регулируемый или нерегулируемый это перекресток. (Пункт 13.1 ПДД)",
    },
    {
        id:14,
        img: "./ticket_1/img/14.jpg",
        question:"Вы намерены проехать перекресток в прямом направлении. Кому Вы должны уступить дорогу?",
        answers: [
            {
                "answer_text": "Обоим трамваям",
                "is_correct": true,
            },
            {
                "answer_text": "Только трамваю А",
                "is_correct": false,
            },
            {
                "answer_text": "Только трамваю Б",
                "is_correct": false,
            },
            {
                "answer_text": "Никому",
                "is_correct": false,
            },
        ],
        help:"Перекрёсток равнозначный. Трамваи в равнозначных условиях имеют преимущество перед безрельсовыми транспортными средствами. Между собой руководствуются «правилом правой руки». Помеха справа у трамвая «А». Соответственно первым проезжает трамвай «Б», за ним «А», Вы последним. (Пункт 13.11 ПДД)",
    },
    {
        id:15,
        img: "./ticket_1/img/15.jpg",
        question:"Кому Вы обязаны уступить дорогу при повороте налево?",
        answers: [
            {
                "answer_text": "Только автобусу",
                "is_correct": false,
            },
            {
                "answer_text": "Только легковому автомобилю",
                "is_correct": false,
            },
            {
                "answer_text": "Никому",
                "is_correct": true,
            },
        ],
        help:"Перекрёсток неравнозначный. Главная дорога меняет направление. Транспортные средства, находящиеся на главной дороге, имеют преимущество, а водители между собой руководствуются «правилом правой руки». Никому не уступая, первым проезжаете Вы, вторым автобус, легковой автомобиль последним, так как он находится на второстепенной дороге. («Дорожные знаки», пункты 13.9, 13.10, 13.11 ПДД)",
    },
    {
        id:16,
        img: "./ticket_1/img/16.jpg",
        question:"С какой максимальной скоростью можно продолжить движение за знаком?",
        answers: [
            {
                "answer_text": "60 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "50 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "30 км/ч",
                "is_correct": false,
            },
            {
                "answer_text": "20 км/ч",
                "is_correct": true,
            },
        ],
        help:"В жилой зоне, согласно знаку, в которую Вы въезжаете, разрешается движение со скоростью не более 20 км/ч. («Дорожные знаки» 5.21, пункт 10.2 ПДД)",
    },
    {
        id:17,
        img: "./img/0.jpg",
        question:"Для перевозки людей на мотоцикле водитель должен иметь водительское удостоверение на право управления транспортными средствами:",
        answers: [
            {
                "answer_text": "Категории «A» или подкатегории «A1»",
                "is_correct": false,
            },
            {
                "answer_text": "Любой категории или подкатегории в течение 2 и более лет",
                "is_correct": false,
            },
            {
                "answer_text": "Только категории «A» или подкатегории «A1» в течение 2 и более лет",
                "is_correct": true,
            },
        ],
        help:"Перевозка людей на мотоцикле должна осуществляться водителем, имеющим водительское удостоверение на право управления ТС категории «A» или подкатегории «A1» в течение 2 и более лет. (Пункт 22.2(1) ПДД)",
    },
    {
        id:18,
        img: "./img/0.jpg",
        question:"При какой неисправности разрешается эксплуатация транспортного средства?",
        answers: [
            {
                "answer_text": "Не работают запорные устройства топливных баков",
                "is_correct": false,
            },
            {
                "answer_text": "Не работают механизм регулировки и фиксирующее устройство сиденья водителя",
                "is_correct": false,
            },
            {
                "answer_text": "Не работает устройство обдува ветрового стекла",
                "is_correct": false,
            },
            {
                "answer_text": "Не работает стеклоподъемник",
                "is_correct": true,
            },
        ],
        help:"Перечисленные в ответах неисправности, за исключением неработающего стеклоподъёмника, указаны в «Перечне неисправностей». Неработающий стеклоподъемник в данном перечне не указан. Следовательно, это не может быть причиной запрещения эксплуатации транспортного средства. («Перечень неисправностей» п. 8.3, 9.2)",
    },
    {
        id:19,
        img: "./img/0.jpg",
        question:"В случае, когда правые колёса автомобиля наезжают на неукреплённую влажную обочину, рекомендуется:",
        answers: [
            {
                "answer_text": "Затормозить и полностью остановиться",
                "is_correct": false,
            },
            {
                "answer_text": "Затормозить и плавно направить автомобиль на проезжую часть",
                "is_correct": false,
            },
            {
                "answer_text": "Не прибегая к торможению, плавно направить автомобиль на проезжую часть",
                "is_correct": true,
            },
        ],
        help:"Такая ситуация опасна вследствие возникновения момента сил, стремящегося развернуть автомобиль. Старайтесь плавно вернуть автомобиль на проезжую часть не меняя скорости.",
    },
    {
        id:20,
        img: "./img/0.jpg",
        question:"Что понимается под временем реакции водителя?",
        answers: [
            {
                "answer_text": "Время с момента обнаружения водителем опасности до полной остановки транспортного средства",
                "is_correct": false,
            },
            {
                "answer_text": "Время с момента обнаружения водителем опасности до начала принятия мер по её избежанию",
                "is_correct": true,
            },
            {
                "answer_text": "Время, необходимое для переноса ноги с педали управления подачи топлива на педаль тормоза",
                "is_correct": false,
            },
        ],
        help:"Под временем реакции водителя понимается время с момента обнаружения водителем опасности до начала принятия мер по её избежанию. Время реакции водителя - величина непостоянная. В основном зависит от возраста, самочувствия в данный момент. Компенсировать недостаток реакции можно снижением скорости. («Техника управления автомобилем»)",
    },

];