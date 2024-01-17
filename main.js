// main.js - Random Facts Generator by Risto Lahteenkorva
// https://github.com/RistoLahteenkorva/randomFacts

const facts = [                                                             // List of facts
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

let developer = false;                                                      // 'I am a web developer' flag

function newFact() {                                                        // Select a random fact
    const randomFact = Math.floor(Math.random() * facts.length);            // generate a random number to select a random fact
    document.getElementById('text').innerHTML = facts[randomFact].text;     // use it to change the fact text with a id tag 'text'
    if (facts[randomFact].id === 2) {                                       // if 'I am a web developer' fact is selected,
        developer = true;                                                   // set 'developer' flag to true
    } else {                                                                // if 'I am a web developer' fact is not selected,
        developer = false;                                                  // set 'developer' flag to false
    }
}



const currentDate = new Date();                                             // get current date

const year = 'This year is ' + currentDate.getFullYear();                   // get current year and make it a string

const weekDay = [                                                           // make an array of week days names
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const week = 'This week is ' + weekDay[currentDate.getDay()];               // get current week day and make it a string

const monthName = [                                                         // make an array of month names
    'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'
]

const month = 'This month is ' + monthName[currentDate.getMonth()];         // get current month and make it a string

const dateItems = [                                                         // make an array of date items
    year, week, month
];
function randomDateItem() {                                                 
    const item =[Math.floor(Math.random() * dateItems.length)];             // Select a random date item from the array of date items and
    document.getElementById('date').innerHTML = dateItems[item];            // use it to change the date text with a id tag 'date'
};

function colorChange(id) {                                
    const randomColor = Math.floor(Math.random()*16777215).toString(16);    // Generate a random color and
    document.getElementById(id).style.color = "#" + randomColor;            // Change the color of the text with a id tag 'id'
    
}

function easternEgg() {                                                     // Additional functionality to change the background color
    if (developer === true) {                                               // if 'I am a web developer' fact is selected, 
        document.body.style.backgroundColor = 'black';                      // change the background color to black and text color to white
        document.body.style.color = 'white';
    } else {                                                                // if 'I am a web developer' fact is not selected,
        document.body.style.backgroundColor = '';                           // change the background color back to original color
        document.body.style.color = 'black';                                // and change the text color back to black 
    }
}

function doAll() {                                                          // call all functions in order to
    newFact();                                                              // to generate a random fact
    randomDateItem();                                                       // and to generate a random date
    colorChange('text');                                                    // and change the color of the fact text
    easternEgg();                                                           // and change the background color if 'I am a web developer' fact is selected
}

const btn = document.getElementById('btn');                                 // Select the 'Generate' button and
btn.addEventListener('click', doAll);                                       // add event listener to the button