const mobile = () => {
    const menu = document.querySelector('#navbar-burger');
    const nav = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
        nav.classList.toggle('clicked');
    });
}

mobile()

