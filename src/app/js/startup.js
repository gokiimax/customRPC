 /* ============================================== Variables ============================================= */
var clientId = document.getElementById("applicationId")

var { shell } = require('electron')

var btn1 = document.getElementById("button1")
var btn1Label = document.getElementById("btn1label")
var btn1Url = document.getElementById("btn1url")

var btn2 = document.getElementById("button2")
var btn2Label = document.getElementById("btn2label")
var btn2Url = document.getElementById("btn2url")

var _detail = document.getElementById("details");
var _state = document.querySelector("#state");
var LargeImageText = document.getElementById("largeImageText")
var SmallImageText = document.getElementById("smallImageText")
var LargeImageKey = document.getElementById("largeImageKey")
var SmallImageKey = document.getElementById("smallImageKey")

var popUp_details = document.getElementById("popUp_details")
var popUp_state = document.getElementById("popUp_state")
 
 /* ============================================== Set Defaults ============================================= */
if(window.localStorage.getItem("clientId")) {
    clientIdValue.value = window.localStorage.getItem("clientId")
}

if (window.localStorage.getItem("button1label")) {
    btn1Label.value = window.localStorage.getItem("button1label")
    btn1Url.value = window.localStorage.getItem("button1url")

    btn1.innerHTML = btn1Label.value
}

if (window.localStorage.getItem("button2label")) {
    btn2Label.value = window.localStorage.getItem("button2label")
    btn2Url.value = window.localStorage.getItem("button2url")

    btn2.innerHTML = btn2Label.value
}

if (window.localStorage.getItem("details")) {
    _detail.value = window.localStorage.getItem("details")
    popUp_details.innerHTML = window.localStorage.getItem("details")
}

if(window.localStorage.getItem("state")) {
    _state.value = window.localStorage.getItem("state")
    popUp_state.innerHTML = window.localStorage.getItem("state")
}

if(window.localStorage.getItem("largeImageKey")) {
    LargeImageKey.value = window.localStorage.getItem("largeImageKey")
}

if(window.localStorage.getItem("largeImageText")) {
    LargeImageText.value = window.localStorage.getItem("largeImageText")
}

if(window.localStorage.getItem("smallImageKey")) {
    SmallImageKey.value = window.localStorage.getItem("smallImageKey")
}

if(window.localStorage.getItem("smallImageText")) {
    SmallImageText.value = window.localStorage.getItem("smallImageText")
}

var devBtn = document.getElementById("devBtn")

devBtn.addEventListener("click", (e) => {
    e.preventDefault();
    shell.openExternal("https://discord.com/developers/applications");
})