$(".up-button-hide").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});



function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');


    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());


    function toggleMenu() {
        menu.toggleClass('burger-menu_active');
        menu.toggleClass('scroll-lock');

    }
}

burgerMenu('.burger-menu');