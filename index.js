// variables that are  contain input and output from the html document 
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
// quote selection 
const quotes = [{
        quote: ' Dwell on the beauty of life. Watch the stars, and see yourself running with them.Think constantly on the changes of the elements into each other, for such thoughts wash away the dust of earthly life.',
        person: "MARCUS AURELIUS"
    },
    {
        quote: 'Every child is an artist; the problem is staying an artist when you grow up',
        person: 'Pablo Picasso'
    },
    {
        quote: "Dont think about making art, just get it done. Let everyone else decide if its good or bad, whether they love it or hate it. While they are deciding, make even more art",
        person: 'Andy Warhol'
    }, {
        quote: "Art is a collaboration between God and the artist, and the less the artist does the better",
        person: "Andre Gide"
    },
    {
        quote: "Every artist was first an amateur.",
        person: "Ralph Waldo Emerson"
    }, {
        quote: "In the end, its not the years in your life that count. Its the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "In three words I can sum up everything Ive learned about life: it goes on.",
        person: " Robert Frost"
    }, {
        quote: " Youve heard that its wise to learn from experience, but it is wiser to learn from the experience of others.",
        person: " Rick Warren"
    }, {
        quote: "The greatest day in your life and mine is when we take total responsibility for our attitudes. Thats the day we truly grow up.",
        person: "John C. Maxwell"
    },
];
//the random function pics a random number out of the length of the quotes and that number is then used to call an element from the array 
btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})