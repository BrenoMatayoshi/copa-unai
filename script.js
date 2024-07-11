// Função generica para ativar/desativar uma classe. Parametros  (variavel da classe / Nova classe)
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// Função generica "clickar". Parametros (Classe do item / A classe nova)
function Toggle(classSelector, newClass) {
    const toggle = document.querySelector(classSelector);
    toggleClass(toggle, newClass);
}

//  Animação no scroll    
const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const index = Array.from(elements).indexOf(entry.target)
        if(entry.isIntersecting){

        } else {

        }
    })
})

const elements = document.querySelectorAll('.hidden')

const destaque = document.querySelectorAll('.botao-menu')

elements.forEach((element) => {Observer.observe(element)})

