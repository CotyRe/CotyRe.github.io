let nuevaTarea = document.getElementById('nuevaTarea')
let formSection = document.getElementById('formSection')
let sectionPantalla3 = document.getElementById('sectionPantalla3')
let noHayTareas = document.getElementById('noHayTareas')
///elementos del form
let tarea = document.getElementById('tarea')
let opcionesDias = document.getElementById('opcionesDias')
let btnAgregar = document.getElementById('btnAgregar')

let listaTareas = sectionPantalla3.querySelectorAll('div')
let tareas = JSON.parse(localStorage.getItem('tareas')) || []

// traer desde el boton de agregar tarea el formulario de pantalla 2

nuevaTarea.addEventListener('click', ()=>{
    formSection.style.display = 'flex'
    sectionPantalla3.style.display = 'none'
    noHayTareas.style.display = 'none'
})

//boton para desplegar y escuchar la imagen en el form de tareas
let btnImagen = document.getElementById('btnImagen')
let listaImg = document.querySelector('#listaImg')
let todasImg = listaImg.querySelectorAll('li')
let imgSeleccionada = []

//escucho el click en la imagen
btnImagen.addEventListener('click', ()=>{
    listaImg.style.display = 'flex'
})
//pongo que se marque cuando aprieto en una imagen y la agrego
todasImg.forEach((imagen)=>{
    imagen.addEventListener('click', (e)=>{
        e.preventDefault()
        let srcImg = imagen.querySelector('img').src
        //guardo la src de la imagen seleccionada en el array de afuera de este scope para poder usarlo en otra funcion
        imgSeleccionada = [srcImg]
        
        todasImg.forEach((img) =>{
            img.querySelector('img').classList.remove('remarcar')
        })

        imagen.querySelector('img').classList.add('remarcar')
    })
})

//FUNCION
let faltaParaFin = ()=>{
    formSection.style.display = 'none'
    sectionPantalla3.style.display = 'flex'
    noHayTareas.style.display = 'none'

    //traigo el valor de la cantidad de dias para trabajarlo con el tiempo
    let cantidadDeDias = parseInt(opcionesDias.value)
    //creo el date now desde el momento en que se presiona el boton btnAgregar
    let momentoAgregoTarea = Date.now()
    //calculo cuando voy a completar la tarea
    let fechaParaFin = momentoAgregoTarea + (cantidadDeDias*86400000)
    //caluclo cuanto falta para completar la tarea en dias
    let faltaParaFin = (fechaParaFin - momentoAgregoTarea)/1000/60/60
    
    return faltaParaFin
    
}

let dameElColor = (faltaParaFin) =>{
//saco las cuentas de tercios
let tercio = Math.round(faltaParaFin/3)
let clase = ''
    if (faltaParaFin > (tercio*2)){
        clase = 'tranqui'
    }else if (faltaParaFin > (tercio)){
        clase = 'medioUrgente'
    }else if (clase < (tercio)){
        clase = 'urgente'
    }else {console.log('todo mal')}


return dameElColor
}


//resumo esa funcion para ponerla dentro de un array
let tareaCargada = []
btnAgregar.addEventListener('click', (e)=>{
    e.preventDefault()
    if (tarea.value === '') return alert ('Campo incompleto: Nombre de tu tarea')
    if (imgSeleccionada.length === 0) return alert('Campo incompelto: Elegir imagen')

    const tareaCargada = {
        nombre: tarea.value,
        tiempo: faltaParaFin (),
        imagen: imgSeleccionada[0]
    }
    
    tareas.push(tareaCargada)
    localStorage.setItem('tareas', JSON.stringify(tareas))

    imgSeleccionada = []
    tarea.value = ''
    opcionesDias = ''

    getTareas()
})

let getTareas = () => {
    if (tareas.length>0){
        sectionPantalla3.style.display = 'flex'
        noHayTareas.style.display = 'none'
    } else {
        sectionPantalla3.style.display = 'none'
        noHayTareas.style.display = 'flex'
    }
    sectionPantalla3.innerHTML = ''
    tareas.forEach((tarea,index)=>{
        let clase = dameElColor (tarea.tiempo)
        //creo la card de la tarea desde una funcion nueva que tiene todos los objetos
        sectionPantalla3.innerHTML += `<div class="divTareas ${clase}"> <img class='imgSelect' id='imgSeleccionada' src="${tarea.imagen}"> <h3> ${tarea.nombre}</h3> <p class="vencimiento">VENCE EN ${tarea.tiempo} HORAS</p> <button class="btnHecho">¡TAREA HECHA!</button> </div>`
    })
    
}

getTareas()

//escuchar la cantidad de dias que selecciono
// opcionesDias.addEventListener('change', (e)=>{
//     console.log(e.target.value)
// })

 //NO FUNCIONAAAAA: le pongo color a cada tarea
// if (faltaParaFin<=1){
//     crearElemento.classList.add('urgente')
// }else if (faltaParaFin>=7){
//     crearElemento.classList.add('medioUrgente')
// }else{
//     crearElemento.classList.add('tranqui')
// }