var anime = document.getElementById("anime");
var character = document.getElementById("character");
var quote = document.getElementById("quote");
var results = document.getElementById("results");

function main() {
    let api = fetch('https://animechan.vercel.app/api/random')
    api.then(function (response) {
        console.log(response.ok)
        return response.json();
    }).then(function (value) {
        console.log(value)

        anime.innerHTML = 'Anime: ' + value.anime
        character.innerHTML = 'character: ' + value.character
        quote.innerHTML = 'quote: ' + value.quote

    })
}

function ApiInUse() {
    window.open('https://animechan.vercel.app')
}
function gitHub() {
    window.open('https://github.com/md-shazed')
}
function pageReload() {
    location.reload();
}
