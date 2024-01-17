const facts = [
    {
        id: 1,
        text: "I am 44 years old.",
    },
    {
        id: 2,
        text: "I am a web developer.",
    },
    {
        id: 3,
        text: "I live in Helsinki.",
    }
];

const btn = document.getElementById('btn');

function newFact() {
    const randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('text').innerHTML = facts[randomFact].text;
}



const currentDate = new Date();

const year = 'This year is ' + currentDate.getFullYear();

const weekDay = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const week = weekDay['Today is ' + currentDate.getDay()];

const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'
]

const month = monthName['This month is ' + currentDate.getMonth()];

const dateItems = [
    year, week, month
];
function randomDateItem() {
    const item =[Math.floor(Math.random() * dateItems.length)];
    document.getElementById('date').innerHTML = dateItems[item];
};

function doAll() {
    newFact();
    randomDateItem();
}

btn.addEventListener('click', doAll);


