function toggleClass(element, className) {
    element.classList.toggle(className);
}
  
function menuToggle() {
    const menu = document.querySelector('.menu-links');
    toggleClass(menu, 'abriu');
}