function toggleClass(element, className) {
    element.classList.toggle(className);
}
  
function menuToggle() {
    const menu = document.querySelector('.menu-links');
    if(menu.classList.contains('abriu')){
        toggleClass(menu, 'fechar');
    } else {
        toggleClass(menu, 'abriu');
    }
}