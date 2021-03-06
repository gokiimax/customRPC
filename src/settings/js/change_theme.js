const dropdowns = document.querySelectorAll('.dropdown');
const active = document.querySelector('.active')

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

            options.forEach(option1 => {
                option1.classList.remove('active')
                option1.classList.remove('selected')
            });

            option.classList.add('active')
            option.classList.add('selected')

            window.localStorage.setItem("theme", option.innerText);
        });
    })
})