

function openMenu() {

    const menu = document.querySelector('.navbar');

    if (menu.classList.contains('visable')) {
        menu.classList.remove('visable')
    }
    else {
        menu.classList.add('visable')
    }

}