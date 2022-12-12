
/*Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("id-header").style.top = "0";
    } else {
        document.getElementById("id-header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
