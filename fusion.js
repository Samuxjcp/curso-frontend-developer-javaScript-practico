// Selección de elementos del DOM
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

// Añadir listeners a los elementos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// Función para alternar el menú de escritorio
function toggleDesktopMenu() {
    // Si el carrito está abierto, lo cierra
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }

    // Alterna la visibilidad del menú de escritorio
    desktopMenu.classList.toggle('inactive');
}

// Función para alternar el menú móvil
function toggleMobileMenu() {
    // Si el carrito está abierto, lo cierra
    if (!aside.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }

    // Alterna la visibilidad del menú móvil
    mobileMenu.classList.toggle('inactive');
}

// Función para alternar el carrito de compras
function toggleCarritoAside() {
    // Si el menú móvil está abierto, lo cierra
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }

    // Alterna la visibilidad del carrito
    aside.classList.toggle('inactive');
}
