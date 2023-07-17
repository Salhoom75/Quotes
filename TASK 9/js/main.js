
var quote = [
    "'you are your home'", "'you are worthy'", "'Live what you love'", "'Die with memories not dreams'", "'One day at a time'",
    "'Make it Happen'", "'Things will work out'", "'Do not let yesterday take up too much of today'", "'Learn from the mistakes of others. You can't live long enough to make them all yourself.'", "'The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.'", "'Once you choose hope, anything is possible.'"
];


function newQuote() {
    var x = Math.floor(Math.random() * quote.length);
    document.getElementById('add').innerHTML = quote[x]

}

newQuote()

// console.log(Math.random()* quote.length )


