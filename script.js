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

elements.forEach((element) => {Observer.observe(element)})


// Contagem regressiva
const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#seconds')

const targetDate = "14 october 2024" // Define aqui a data limite (Dias Mês Ano)

// Contador de dias
function countdown(){
    const newTargetDate = new Date(targetDate)
    const currentDate = new Date()

    const totalSeconds = (newTargetDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    if (totalSeconds >= 0) {
        daysEl.innerHTML = days
        hoursEl.innerHTML = formatTime(hours)
        minutesEl.innerHTML = formatTime(mins)
        secondsEl.innerHTML = formatTime(seconds)
    } else {
        //esperar o wez responder pra terminar
        document.querySelector('.conteudo-principal > h2').textContent = 'Está na hora!!!'
        document.querySelectorAll('.countdown-el').forEach((count) => {
            count.style.display = 'none'
        })
        //daysEl.style.display = 'none'
        //hoursEl.style.display = 'none'
        //minutesEl.style.display = 'none'
        //secondsEl.style.display = 'none'
    }
}

function formatTime(time){
    return time < 10 ? '0' + time : time;
}

countdown();

setInterval(countdown, 1000)


// Imagens na página principal