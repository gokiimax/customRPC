if(window.localStorage.getItem("theme")) {
    var theme = window.localStorage.getItem("theme");

    /* Red Theme */
    if(theme === "Red") {
        document.body.className = '';
        document.body.classList.add("red_theme")
    }

    if(theme === "Discord") {
        document.body.className = '';
        document.body.classList.add("discord_theme")
    }

    if(theme === "Github") {
        document.body.className = '';
        document.body.classList.add("github_theme")
    }

    if(theme === "Gruvbox") {
        document.body.className = '';
        document.body.classList.add("gruvbox_theme")
    }

    if(theme === "Material Darker") {
        document.body.className = '';
        document.body.classList.add("material_darker")
    }

    if(theme === "Material Lighter") {
        document.body.className = '';
        document.body.classList.add("material_lighter")
    }

    if(theme === "Palenight") {
        document.body.className = '';
        document.body.classList.add("palenight")
    }

    if(theme === "Default") {
        document.body.className = '';
    }
}