const mobile = () => {
    const menu = document.querySelector('#navbar-burger');
    const nav = document.querySelectorAll('.nav-links');

    menu.addEventListener('click', () => {
        nav.forEach(item => {
            item.classList.toggle('clicked')
        });
    });
}

mobile()