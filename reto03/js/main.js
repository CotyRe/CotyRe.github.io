let saludo = document.getElementById('saludo')
let caja = document.querySelectorAll('.check')
let tasks = document.querySelectorAll('.list')
let nombre = ' '
let form = document.getElementById('form')
let message = document.getElementById('message')
let messageHolder = document.getElementById('messageHolder')
let btnCerrar = document.getElementById('btn')

form.addEventListener('submit', (e)=> {
        e.preventDefault();
    })

tasks.forEach(task => {
    task.addEventListener('click', () => {
        let input = task.querySelector('.check')
        input.checked = !input.checked
        let label = task.querySelector('label')
        let taskTitle = label.innerText
        nombre = document.querySelector('#nombre').value

        alertUser (nombre, taskTitle)
    })
});

function alertUser (nombre, taskTitle){
    let template = `<h2> ¡Felicitaciones, ${nombre}!</h2>
    <p>Terminaste la tarea ${taskTitle}. Ahora te podés comer un chocolate 😋</p>`

    message.innerHTML = template
    messageHolder.classList.remove('d-none')
}

btnCerrar.addEventListener('click', () => {
    messageHolder.classList.add('d-none')
})

