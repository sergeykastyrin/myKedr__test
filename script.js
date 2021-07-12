function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        
        if (menu.hasClass('burger-menu_active')) {
            $('.burger-menu__nav').css('overflow', 'visible');
            $('.burger-menu__nav').css('right', '50%');
            
        } else {
            $('.burger-menu__nav').css('overflow', 'hidden');
            $('.burger-menu__nav').css('right', '100%');
        }
    }
}

burgerMenu('.burger-menu');


