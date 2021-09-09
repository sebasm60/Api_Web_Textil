window.onload = function() {

    //Ajustes del navar
    const showNavbar = (toggleId, navId, bodyId, headerId, divId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        const bodypd = document.getElementById(bodyId);
        const headerpd = document.getElementById(headerId);
        const div = document.getElementById(divId);

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
                div.classList.toggle('div-productos');
            });
        };
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'productos-container');
    const linkColor = document.querySelectorAll('.nav__link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        };
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));
};