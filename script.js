function toggleClass(element, className) {
    element.classList.toggle(className);
}

function Toggle(classSelector, newClass) {
    const toggle = document.querySelector(classSelector);
    toggleClass(toggle, newClass);
}