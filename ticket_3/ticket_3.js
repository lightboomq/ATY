const ticket_3 = [
    {
        id:1,
        img: "./ticket_3/img/1.jpg",
        question:"Выезжая с грунтовой дороги на перекресток, Вы попадаете:",
        answers: [
            {
                "answer_text": "На главную дорогу",
                "is_correct": true
            },
            {
                "answer_text": "На равнозначную дорогу, поскольку отсутствуют знаки приоритета",
                "is_correct": false
            },
            {
                "answer_text": "На равнозначную дорогу, поскольку проезжая часть имеет твердое покрытие перед перекрестком",
                "is_correct": false
            },
        ],
        help:"Главной является дорога с покрытием по отношению к грунтовой. Перекрёсток неравнозначный. Вы находитесь на второстепенной дороге, выезжать будете на главную. (Пункт 1.2 термин «Главная дорога»)",
    },
    {
        id:2,
        img: "./ticket_3/img/2.jpg",
        question:"Где Вы должны остановиться?", 
        answers: [
            {
                "answer_text": "Перед знаком (А)",
                "is_correct": false
            },
            {
                "answer_text": "Перед перекрестком (Б)",
                "is_correct": false
            },
            {
                "answer_text": "Перед краем пересекаемой проезжей части (В)",
                "is_correct": true
            },
        ],
        help:"В случае установки знака 2.5 «Движение без остановки запрещено» непосредственно перед пересечением проезжих частей водитель обязан остановиться у стоп-линии. При её отсутствии (как в данном случае) водитель обязан остановиться перед границей проезжих частей, т.е. не заезжая за линию «В». Имейте в виду, что такие места опасны, часто находятся «под особым контролем» инспекторов ГИБДД. Поэтому всегда выполняйте главное условие - обязательную остановку. Это избавит Вас от конфликтной ситуации и сохранит Вашу собственную безопасность. («Дорожные знаки»)",
    },
    {
        id:3,
        img: "./ticket_3/img/3.jpg",
        question:"Вам необходимо двигаться со скоростью не более 40 км/ч:",
        answers: [
            {
                "answer_text": "Только во время дождя",
                "is_correct": false
            },
            {
                "answer_text": "Во время выпадения осадков (дождя, града, снега)",
                "is_correct": false
            },
            {
                "answer_text": "Во всех случаях, когда покрытие проезжей части влажное",
                "is_correct": true
            },
        ],
        help:"Табличка 8.16 «Влажное покрытие» указывает, что действие знака распространяется на период времени, когда покрытие проезжей части влажное. («Дорожные знаки»)",
    },
    {
        id:4,
        img: "./ticket_3/img/4.jpg",
        question:"Какой из указанных знаков устанавливается в начале дороги с односторонним движением?",
        answers: [
            {
                "answer_text": "Только А",
                "is_correct": false
            },
            {
                "answer_text": "Только Б",
                "is_correct": true
            },
            {
                "answer_text": "Б или Г",
                "is_correct": false
            },
            {
                "answer_text": "Б или В",
                "is_correct": false
            },
        ],
        help:"Знак «Б» - 5.5 «Дорога с односторонним движением». («Дорожные знаки»)",
    },
    {
        id:5,
        img: "./ticket_3/img/5.jpg",
        question:"Можно ли Вам остановиться в этом месте для посадки или высадки пассажиров?",
        answers: [
            {
                "answer_text": "Можно",
                "is_correct": false
            },
            {
                "answer_text": "Можно, если при этом не будут созданы помехи движению маршрутных транспортных средств",
                "is_correct": true
            },
            {
                "answer_text": "Нельзя",
                "is_correct": false
            },
        ],
        help:"В данном случае место остановки маршрутных транспортных средств обозначено соответствующим знаком и жёлтой зигзагообразной разметкой 1.17.1. Остановка в указанном месте допускается, если Вы произведёте ее для посадки или высадки пассажиров и в это время не создадите помех движению маршрутных транспортных средств или ТС, используемых в качестве легкового такси. («Дорожные знаки», «Горизонтальная разметка», пункт 12.4 ПДД)",
    },
    {
        id:6,
        img: "./ticket_3/img/6.jpg",
        question:"При повороте направо Вы:",
        answers: [
            {
                "answer_text": "Имеете право проехать перекресток первым",
                "is_correct": false
            },
            {
                "answer_text": "Должны уступить дорогу только пешеходам",
                "is_correct": false
            },
            {
                "answer_text": "Должны уступить дорогу автомобилю с включенными проблесковым маячком и специальным звуковым сигналом, а также пешеходам",
                "is_correct": true
            },
        ],
        help:"Перекресток регулируемый. «Оперативник» с включенным проблесковым маячком и специальным звуковым сигналом может отступать от ряда требований Правил. В данной ситуации все водители должны обеспечить ему беспрепятственный проезд перекрестка. После его проезда, поворачивая направо Вы уступаете также и пешеходам. (Пункты 3.2, 13.1 ПДД)",
    },
    {
        id:7,
        img: "./img/0.jpg",
        question:"В каких случаях водитель не должен подавать сигнал указателями поворота?",
        answers: [
            {
                "answer_text": "Только при отсутствии на дороге других участников движения",
                "is_correct": false
            },
            {
                "answer_text": "Только если сигнал может ввести в заблуждение других участников движения",
                "is_correct": true
            },
            {
                "answer_text": "В обоих перечисленных случаях",
                "is_correct": false
            },
        ],
        help:"Подача сигнала указателями поворота должна производиться заблаговременно до начала выполнения маневра и прекращаться немедленно после его завершения. При этом сигнал не должен вводить в заблуждение других участников движения. (Пункт 8.2 ПДД)",
    },
    {
        id:8,
        img: "./ticket_3/img/8.jpg",
        question:"Вам разрешено выполнить поворот направо:",
        answers: [
            {
                "answer_text": "Только по траектории А",
                "is_correct": true
            },
            {
                "answer_text": "Только по траектории Б",
                "is_correct": false
            },
            {
                "answer_text": "По любой траектории из указанных",
                "is_correct": false
            },
        ],
        help:"При повороте направо транспортное средство должно двигаться по возможности ближе к правому краю проезжей части. У Вас такая возможность есть, продолжаете движение по траектории «А». (Пункт 8.6 ПДД)",
    },
    {
        id:9,
        img: "./ticket_3/img/9.jpg",
        question:"Разрешается ли Вам выполнить разворот на перекрестке по указанной траектории?",
        answers: [
            {
                "answer_text": "Разрешается",
                "is_correct": false
            },
            {
                "answer_text": "Разрешается, если видимость дороги не менее 100 м",
                "is_correct": false
            },
            {
                "answer_text": "Запрещается",
                "is_correct": true
            },
        ],
        help:"Впереди перекрёсток. Прежде, чем совершить на нём поворот или разворот, необходимо было перестроиться на левую крайнюю полосу. Вы этого своевременно не сделали. Разворот по данной траектории является нарушением. (Пункты 8.5, 8.8 ПДД)",
    },
    {
        id:10,
        img: "./ticket_3/img/10.jpg",
        question:"По какой полосе Вы имеете право двигаться с максимальной разрешенной скоростью вне населенного пункта?",
        answers: [
            {
                "answer_text": "Только по правой",
                "is_correct": false
            },
            {
                "answer_text": "Только по левой",
                "is_correct": false
            },
            {
                "answer_text": "По любой",
                "is_correct": true
            },
        ],
        help:"Действие происходит вне населённого пункта. В этом случае запрещается занимать левые полосы движения при свободных правых. Вам необходимо перестроиться и продолжать движение в данной ситуации только по правой полосе. (Пункт 9.4 ПДД)",
    },
    {
        id:11,
        img: "./img/0.jpg",
        question:"В каком случае водитель может начать обгон, если такой маневр на данном участке дороги не запрещен?",
        answers: [
            {
                "answer_text": "Только если полоса, предназначенная для встречного движения, свободна на достаточном для обгона расстоянии",
                "is_correct": false
            },
            {
                "answer_text": "Только если его транспортное средство никто не обгоняет",
                "is_correct": false
            },
            {
                "answer_text": "В случае, если выполнены оба условия",
                "is_correct": true
            },
        ],
        help:"Выполняя «классический» обгон, Вы должны учитывать три обязательных условия, при выполнении которых, при обгоне не создаёте никаких помех: 1) встречному, 2) едущим позади, 3) обгоняемому. (Пункты 11.1, 11.2 ПДД, «Техника управления автомобилем»)",
    },
    {
        id:12,
        img: "./ticket_3/img/12.jpg",
        question:"Кто из водителей нарушил правила стоянки?",
        answers: [
            {
                "answer_text": "Оба",
                "is_correct": false
            },
            {
                "answer_text": "Только водитель автомобиля",
                "is_correct": true
            },
            {
                "answer_text": "Только водитель мотоцикла",
                "is_correct": false
            },
            {
                "answer_text": "Никто не нарушил",
                "is_correct": false
            },
        ],
        help:"Водитель легкового автомобиля может заезжать на прилегающий к проезжей части тротуар только в местах, обозначенных знаком 6.4 «Парковка (парковочное место)», с одной из табличек 8.6.2, 8.6.3, 8.6.6-8.6.9 «Способ постановки транспортного средства на стоянку». В данной ситуации таких знаков нет, соответственно водитель - «нарушитель». Водитель мотоцикла не нарушает правила остановки и стоянки, т. к. правила запрещают это делать в условиях, когда расстояние между сплошной линией разметки и остановившимся транспортным средством менее З м. Здесь же действие происходит со стороны прерывистой линии, что Правилам не противоречит. (Пункт 12.2 ПДД)",
    },
    {
        id:13,
        img: "./ticket_3/img/13.jpg",
        question:"При движении прямо Вы:",
        answers: [
            {
                "answer_text": "Должны остановиться перед стоп-линией",
                "is_correct": false
            },
            {
                "answer_text": "Можете продолжить движение через перекрёсток без остановки",
                "is_correct": true
            },
            {
                "answer_text": "Должны уступить дорогу транспортным средствам, движущимся с других направлений",
                "is_correct": false
            },
        ],
        help:"Перекрёсток регулируемый. В этом случае знаки приоритета, а в их число входит и знак 2.5 «Движение без остановки запрещено», согласно принципу приоритетности регулирования дорожного движения, «не работают», т.е. ими мы не руководствуемся. Горит зелёный сигнал светофора. Продолжаете движение через перекрёсток без остановки. (Пункты 6.2, 6.15, 13.3 ПДД)",
    },
    {
        id:14,
        img: "./ticket_3/img/14.jpg",
        question:"В каком случае Вы имеете преимущество?",
        answers: [
            {
                "answer_text": "Проедете перекрёсток первым",
                "is_correct": true
            },
            {
                "answer_text": "Уступите дорогу легковому автомобилю",
                "is_correct": false
            },
            {
                "answer_text": "Уступите дорогу обоим транспортным средствам",
                "is_correct": false
            },
        ],
        help:"Перекрёсток равнозначный. Водители при определении порядка проезда перекрёстка руководствуются «правилом правой руки», т.е. у кого помеха справа, тот и уступает дорогу. У Вас помехи справа при повороте направо нет, т.к. при повороте направо Ваша траектория не пересекается с мотоциклом. Проезжаете перекресток первым. (Пункт 13.11 ПДД)",
    },
    {
        id:15,
        img: "./ticket_3/img/15.jpg",
        question:"Кому Вы обязаны уступить дорогу при повороте налево?",
        answers: [
            {
                "answer_text": "Трамваям А и Б",
                "is_correct": false
            },
            {
                "answer_text": "Трамваю А и легковому автомобилю",
                "is_correct": false
            },
            {
                "answer_text": "Только трамваю А",
                "is_correct": true
            },
            {
                "answer_text": "Никому",
                "is_correct": false
            },
        ],
        help:"Перекрёсток неравнозначный. Главная дорога меняет направление. Транспортные средства, находящиеся на главной дороге, имеют преимущество; между собой безрельсовые транспортные средства руководствуются «правилом правой руки», уступая трамваю, имеющему преимущество в равнозначных условиях. Трамвай «А» проезжает первым, Вы после него. Легковой автомобиль и трамвай «Б» одновременно, так как их траектории не пересекаются. («Дорожные знаки», пункты 13.9, 13.10, 13.11 ПДД)",
    },
    {
        id:16,
        img: "./ticket_3/img/16.jpg",
        question:"Кто из водителей нарушил правила остановки?",
        answers: [
            {
                "answer_text": "Только водитель легкового автомобиля",
                "is_correct": false
            },
            {
                "answer_text": "Только водитель грузового автомобиля",
                "is_correct": false
            },
            {
                "answer_text": "Оба",
                "is_correct": true
            },
        ],
        help:"Водитель легкового автомобиля хочет объехать стоящий перед закрытым шлагбаумом грузовик. Правила, оговаривающие порядок проезда через железнодорожный переезд, такой маневр (с выездом на полосу встречного движения) запрещают. (Пункт 15.3 ПДД).",
    },
    {
        id:17,
        img: "./img/0.jpg",
        question:"Какое оборудование должно иметь механическое транспортное средство, используемое для обучения вождению?",
        answers: [
            {
                "answer_text": "Дополнительные педали привода сцепления (кроме транспортных средств с автоматической трансмиссией) и тормоза",
                "is_correct": false
            },
            {
                "answer_text": "Зеркало заднего вида для обучающего вождению",
                "is_correct": false
            },
            {
                "answer_text": "Опознавательные знаки «Учебное транспортное средство»",
                "is_correct": false
            },
            {
                "answer_text": "Все перечисленное оборудование",
                "is_correct": true
            },
        ],
        help:"Правильный ответ – все перечисленное оборудование, согласно Пункта 21.5 ПДД и Пункта 5 Основных положений по допуску",
    },
    {
        id:18,
        img: "./img/0.jpg",
        question:"В каких случаях запрещается эксплуатация мотоцикла?",
        answers: [
            {
                "answer_text": "Подножки или рукоятки пассажиров на седле не имеют прорезиненного покрытия",
                "is_correct": false
            },
            {
                "answer_text": "Имеется люфт в соединениях рамы мотоцикла с рамой бокового прицепа",
                "is_correct": true
            },
            {
                "answer_text": "Отсутствует огнетушитель",
                "is_correct": false
            },
        ],
        help:"Для мототранспортных средств, относящихся к ТС категорий L, остаточная глубина рисунка протектора шин (при отсутствии индикаторов износа), должна быть не более 0,8 мм («Перечень неисправностей» п. 5.4)",
    },
    {
        id:19,
        img: "./img/0.jpg",
        question:"На повороте возник занос задней оси переднеприводного автомобиля. Ваши действия?",
        answers: [
            {
                "answer_text": "Уменьшите подачу топлива, рулевым колесом стабилизируете движение",
                "is_correct": false
            },
            {
                "answer_text": "Притормозите и повернёте рулевое колесо в сторону заноса",
                "is_correct": false
            },
            {
                "answer_text": "Слегка увеличите подачу топлива, корректируя направление движения рулевым колесом",
                "is_correct": true
            },
            {
                "answer_text": "Значительно увеличите подачу топлива, не меняя положения рулевого колеса",
                "is_correct": false
            },
        ],
        help:"Переднеприводные автомобили значительно отличаются своим поведением от заднеприводных. Это обстоятельство следует учитывать во время управления. Учитывайте обстоятельство, что при движении по прямой переднеприводный автомобиль не склонен к заносу на значительно более высоких скоростях по сравнению с заднеприводным. Он хорошо держит дорогу. Но на поворотах, особенно мокрых, обледенелых, если не использовать «технику прохождения поворотов», его может не только занести, а снести, при этом происходит одновременная потеря сцепления колёс обеих осей с дорогой. Это явление, как правило, заканчивается ДТП. Случай заноса задней оси - это «полбеды». В такой ситуации плавно увеличивайте подачу топлива. Сцепление задних колес возрастёт. Рулевым колесом корректируйте направление движения. («Техника управления автомобилем»).",
    },
    {
        id:20,
        img: "./img/0.jpg",
        question:"Какие сведения необходимо сообщить диспетчеру для вызова «Скорой медицинской помощи» при ДТП?",
        answers: [
            {
                "answer_text": "Указать общеизвестные ориентиры, ближайшие к месту ДТП. Сообщить о количестве пострадавших, указать их пол и возраст",
                "is_correct": false
            },
            {
                "answer_text": "Указать улицу и номер дома, ближайшего к месту ДТП. Сообщить, кто пострадал в ДТП (пешеход, водитель автомобиля или пассажиры), и описать травмы, которые они получили. ",
                "is_correct": false
            },
            {
                "answer_text": "Указать место ДТП (назвать улицу, номер дома и общеизвестные ориентиры, ближайшие к месту ДТП). Сообщить: количество пострадавших, их пол, примерный возраст, наличие у них сознания, дыхания, кровообращения, а также сильного кровотечения, переломов и других травм. Дождаться сообщения диспетчера о том, что вызов принят.",
                "is_correct": true
            },
        ],
        help:"Наиболее полная информация позволяет службе «Скорой медицинской помощи» определиться с количеством высылаемых бригад медицинских специалистов, их специализацией, упрощает выбор пути и сокращает время приезда автомобиля «Скорой медицинской помощи» и других служб.",
    },
]

