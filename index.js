window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')
    console.log(key)
    if(!audio) return //esto detendrá la ejecución de la función
    audio.currentTime = 0 //setea la posición de inicio del audio
    audio.play() //play es un metodo del objeto audio
})
window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.remove('playing')
})
const hihat = document.querySelector(`audio[data-key="74"]`)
hihat.volume = 0.5
const openhat = document.querySelector(`audio[data-key="75"]`)
openhat.volume = 0.4
const ride = document.querySelector(`audio[data-key="76"]`)
ride.volume = 0.4
