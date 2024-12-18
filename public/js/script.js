const container = document.querySelector("#container");

fetch('https://animechan.io/api/v1/quotes/random')
    .then(response => response.json())
    .then(quote => console.log(quote))