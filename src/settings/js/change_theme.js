const dropdowns = document.querySelectorAll('.dropdown');
const active = document.querySelector('.selected')

dropdowns.forEach(dropdown => {
    var select = dropdown.querySelector('.select');
    var caret = dropdown.querySelector('.caret');
    var menu = dropdown.querySelector('.menu');
    var options = dropdown.querySelectorAll('.menu li');
    var selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove("select-clicked")
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active')
            });

            option.classList.add('active')

            window.localStorage.setItem("theme", option.innerText);
        });
    })
})

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

    if(theme === "Default") {
        document.body.className = '';
    }

    active.innerText = theme
}