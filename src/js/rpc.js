const buttonOne = document.getElementById("button1Checkbox")
const buttonTwo = document.getElementById("button2Checkbox")

const buttonTwoLabel = document.querySelector(".btnlabel2")
const buttonTwoCheckbox = document.querySelector(".btn2checkbox")
const buttonTwoTxtLabel = document.getElementById("btn2label")
const buttonTwoTxtUrl = document.getElementById("btn2url")

let enableButton1 = false;
let enableButton2 = false;

const popUp = document.getElementById("contentWrapper")
const popUp_details = document.getElementById("popUp_details")
const popUp_state = document.getElementById("popUp_state")
const popUp_timestamp = document.getElementById("popUp_timestamp")

/* Details */
details.addEventListener('keyup', (e) => {
    popUp_details.innerHTML = details.value;
})

/* State */
state.addEventListener("keyup", (e) => {
    popUp_state.innerHTML = state.value
})

/* Button One */
buttonOne.addEventListener('change', e => {
    if(e.target.checked === true) {
        let button1 = document.getElementById("button1")
        button1.style = "opacity: 1;"
        enableButton1 = true;

        buttonTwoLabel.classList.remove("disabled")
        buttonTwoCheckbox.classList.remove("disabled")
        buttonTwoTxtLabel.classList.remove("disabled")
        buttonTwoTxtUrl.classList.remove("disabled")
    } else {
        buttonTwoLabel.classList.add("disabled")
        buttonTwoCheckbox.classList.add("disabled")
        buttonTwoTxtLabel.classList.add("disabled")
        buttonTwoTxtUrl.classList.add("disabled")

        button1.style = "opacity: 0;"
        enableButton1 = false;
    }
})

/* Button Two */
buttonTwo.addEventListener('change', e => {
    if(e.target.checked === true) {
        enableButton2 = true;

        let button2 = document.getElementById("button2")
        button2.style = "opacity: 1;"
    } else {
        enableButton1 = false;

        button2.style = "opacity: 0;"
    }
})


/* ============================================== Discord RPC ============================================= */
const DiscordRPC = require("discord-rpc");
const path = require('path');
const client = new DiscordRPC.Client({transport: 'ipc'})
const updateBtn = document.getElementById("updateBtn");
const clientIdValue = document.getElementById("applicationId")

const btn1 = document.getElementById("button1")
const btn1Label = document.getElementById("btn1label")
const btn1Url = document.getElementById("btn1url")

const btn2 = document.getElementById("button2")
const btn2Label = document.getElementById("btn2label")
const btn2Url = document.getElementById("btn2url")

const _detail = document.getElementById("details");
const _state = document.querySelector("#state");
const LargeImageText = document.getElementById("largeImageText")
const SmallImageText = document.getElementById("smallImageText")
const LargeImageKey = document.getElementById("largeImageKey")
const SmallImageKey = document.getElementById("smallImageKey")

/* ============================================== Buttons ============================================= */

btn1Label.addEventListener("keydown", () => {
    btn1.innerHTML = btn1Label.value
});

btn2Label.addEventListener("keydown", () => {
    btn2.innerHTML = btn2Label.value
});

/* ============================================== Discord RPC ============================================= */

async function setActivity(clientId) {
    client.on('ready', async () => {

        let options
        
        if(enableButton1) {
            options = {
                buttons: [{label: btn1Label.value, url: btn1Url.value}],
                details: _detail.value ? _detail.value : "Developed by",
                state: _state.value ? _state.value : "gokimax",
                startTimestamp: Date.now(),
                largeImageKey: LargeImageKey.value ? LargeImageKey.value : "",
                largeImageText: LargeImageText.value ? LargeImageText.value : "Developed by",
                smallImageKey: SmallImageKey.value ? SmallImageKey.value : "",
                smallImageText: SmallImageText.value ? SmallImageText.value : "gokimax",
                instance: false,
            }

            window.localStorage.setItem("button1label", btn1Label.value)
            window.localStorage.setItem("button1url", btn1Url.value)
        } else {
            options = {
                details: _detail.value ? _detail.value : "Developed by",
                state: _state.value ? _state.value : "gokimax",
                startTimestamp: Date.now(),
                largeImageKey: LargeImageKey.value ? LargeImageKey.value : "",
                largeImageText: LargeImageText.value ? LargeImageText.value : "Developed by",
                smallImageKey: SmallImageKey.value ? SmallImageKey.value : "",
                smallImageText: SmallImageText.value ? SmallImageText.value : "gokimax",
                instance: false,
            }
        }

        if(enableButton2) {
            options = {
                buttons: [{label: btn1Label.value, url: btn1Url.value}, {label: btn2Label.value, url: btn2Url.value}],
                details: _detail.value ? _detail.value : "Developed by",
                state: _state.value ? _state.value : "gokimax",
                startTimestamp: Date.now(),
                largeImageKey: LargeImageKey.value ? LargeImageKey.value : "",
                largeImageText: LargeImageText.value ? LargeImageText.value : "Developed by",
                smallImageKey: SmallImageKey.value ? SmallImageKey.value : "",
                smallImageText: SmallImageText.value ? SmallImageText.value : "gokimax",
                instance: false,
            }

            window.localStorage.setItem("button1label", btn1Label.value)
            window.localStorage.setItem("button1url", btn1Url.value)
            window.localStorage.setItem("button2label", btn2Label.value)
            window.localStorage.setItem("button2url", btn2Url.value)
        }

        await client.setActivity(options).catch(err => showAlert(err), console.error)

        console.log("[CustomRPC] Discord Rich Presence has been enabled!")
    });

    await client.login({ clientId: clientId }).then(showAlert("Successfully enabled RPC!"), sendNotification("Discord Rich Presence has been enabled!")).catch( (err) => {showAlert(err)});
}

updateBtn.addEventListener("click", async (e) => {
    e.preventDefault(true);
    if(clientIdValue.value == "") {
        return showAlert("You need to specifie a application id!")
    } else {
        try {
            setActivity(clientIdValue.value);

            window.localStorage.setItem("clientId", clientIdValue.value)
            window.localStorage.setItem("details", _detail.value ? _detail.value : "Developed by")
            window.localStorage.setItem("state", _state.value ? _state.value : "gokimax")
            window.localStorage.setItem("largeImageKey", LargeImageKey.value ? LargeImageKey.value : "")
            window.localStorage.setItem("largeImageText", LargeImageText.value ? LargeImageText.value : "Developed by")
            window.localStorage.setItem("smallImageKey", SmallImageKey.value ? SmallImageKey.value : "")
            window.localStorage.setItem("smallImageText", SmallImageText.value ? SmallImageText.value : "gokimax")
        } catch (err) {
            console.error(err)
        }
    }
})

/* ============================================== Utils ============================================= */
const showAlert = (text) => {
    const alertEl = document.createElement("div");
    alertEl.innerText = text;
    alertEl.className = "alert slide-in";
    document.body.appendChild(alertEl);

    setTimeout(() => {
        alertEl.className = "alert slide-out";
        setTimeout(() => {
            alertEl.remove();
        }, 400);
    }, 3000);
};

let sendNotification = (text) => {
    const title = "CustomRPC | Beta"

    const notification = new Notification(title, {
        body: text,
        requireInteraction: false,
        icon: path.join(__dirname, "icons/icon.png"),                
    })

}

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
}

if(window.localStorage.getItem("state")) {
    _state.value = window.localStorage.getItem("state")
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