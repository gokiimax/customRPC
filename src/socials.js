var { shell } = require('electron')

var twitter = document.getElementById("twitter")
var youtube = document.getElementById("youtube")
var github = document.getElementById("github")
var discord = document.getElementById("discord")

twitter.addEventListener('click', () => {
    shell.openExternal("https://twitter.com/gokimax_x")
})

youtube.addEventListener('click', () => {
    shell.openExternal("https://www.youtube.com/channel/UCjqJ3HJkiyu12fzFKIGEovQ")
})

github.addEventListener('click', () => {
    shell.openExternal("https://github.com/gokiimax")
})

discord.addEventListener('click', () => {
    shell.openExternal("https://twitter.com/gokimax_x")
})