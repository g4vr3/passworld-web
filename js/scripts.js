document.addEventListener('DOMContentLoaded', function () {
    // Menú del header
    const headerToggle = document.querySelector('.menu-toggle-header');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a'); // Selecciona los enlaces del menú

    if (headerToggle) {
        headerToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    navLinksItems.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active'); // Cierra el menú
        });
    });

    // Menú del manual (barra lateral)
    const sidebarToggle = document.querySelector('.menu-toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    const sidebarLinks = document.querySelectorAll('.sidebar a'); // Selecciona los enlaces del menú lateral
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebar.classList.remove('active'); // Cierra el menú
        });
    });
});

let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll hacia abajo: ocultar el header
        header.style.top = '-100px';
    } else {
        // Scroll hacia arriba: mostrar el header
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});