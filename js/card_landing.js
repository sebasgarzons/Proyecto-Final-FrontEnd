/* const fetchData = async () => {
    try {
        const res = await fetch('/api_cards_landing.json')
        const data = await res.json()
        return data

        
    } catch (error) {
        console.log(error)
    }
}

x = fetchData()
console.log(x) */


/* document.addEventListener("DOMContentLoaded", function(event) {  */
//Do work
/*     dibujar_gatos()
}); */

async function llamar_gatos() {
    const response = await fetch('api_cards_landing.json')
    const gatos = await response.json()
    dibujar_gatos(gatos); 

    /* dibujar_gatos(gatos.filter((cat) => cat.edad>5 && cat.edad <10)); */

    /* dibujar_gatos(gatos.filter((cat) => cat.nombre.includes('ia'))); */

    /* dibujar_gatos(gatos.filter((cat) => cat.edad>5 && cat.edad <10)); */
    /* dibujar_gatos(gatos.filter((cat) => cat.color === 'amarillo')); */

}



/* function buil_card(data){
    let cont_cats = document.getElementById('add_cats');

    for (i = 0; i < data.length; i++) {
        let box_new = `
        <ul>
        <li>Edad: <span></span></li>
        <li>Sexo: <span class="sex_cat"></span></li>
        <li>edad: 6</li>
        <li>sexo: macho</li>
        <li>color: blanco</li>
        <li>esterilizado: si</li>
        <li>vacunado: si</li>
        <li>discapacidad: ninguna</li>
        <li>estado: buena</li>
    </ul>
        `
        
    }




} */

function dibujar_gatos(data) {
    
    console.log('Entré')
    let cont_cats = document.getElementById('add_cats');

    for (let i = 0; i < data.length; i++){
        let box_back_cat = `<div class="box_card">
        <div class="container">
            <div class="front card">
                <div>
                    <img src="${data[i].foto}">
                </div>
    
            </div>
            <div class="back card">
                <div class="cont_back_card">
                    <ul>
                        <li>Nombre: <span>${data[i].nombre}</span></li>
                        <li>Edad: <span class="sex_cat">${data[i].edad}</span></li>
                        <li>Sexo: <span>${data[i].sexo}</span></li>
                        <li>Color: <span>${data[i].color}</span></li>
                        <li>Esterilizado: <span>${data[i].esterilizado}</span></li>
                        <li>Vacunado: <span>${data[i].vacunado}</span></li>
                        <li>Discapacidad: <span>${data[i].discapacidad}</span></li>
                        <li>Estado: <span>${data[i].estado}</span></li>
                    </ul>
                </div>
            </div>
            <div class="title">
                <p>${data[i].nombre}</p>
            </div>
        </div>
    </div>`
        cont_cats.innerHTML += box_back_cat

    }




    /*     x.forEach(gato => {
            console.log(gato);
            console.log(gato.nombre)
            console.log(gato.sexo);
            document.getElementsByClassName('sex_cat').innerText=gato.sexo;
        }); */

}

/* function dibujar_gatos_home(data) {
    console.log('Entré a dibujar en el home')
    let cont_cats = document.getElementById('slider_cats_cont');

    for (let i = 0; i < data.length; i++){
        let box_slider_cat = `<div class="cont_box_slider_cat_display adopcion__display">
        <div class="box_slider_cat_display card">

            <div class="slider_cat_text card__text">

                            <div class="card-body">
                                <h5 class="nombre-card-body" id="nombre"></h5>
                                <ul>
                                    <li>
                                        <p class="sub-nombre">Edad:</p>
                                        <p class="sub-resultado" id="edad"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Sexo:</p>
                                        <p class="sub-resultado" id="sexo"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Color: </p>
                                        <p class="sub-resultado" id="color"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Esterilización:</p>
                                        <p class="sub-resultado" id="este"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Vacunas:</p>
                                        <p class="sub-resultado" id="vacu"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Discapacidad:</p>
                                        <p class="sub-resultado" id="dis"></p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Salud:</p>
                                        <p class="sub-resultado" id="salu"></p>
                                    </li>
                                </ul>
                            </div>

                
                <button class="button button-adopt  card__button" id="btn_slider">Adoptame</button>
            </div>
            <div class="slider_cat_display card__cats">
                <img src="${data[i].foto}" class="card__img">
            </div>
        </div>
    </div>
        `
        cont_cats.innerHTML += box_slider_cat

    }

} */



/* function cats_home(data){

    for (let index = 0; index < 4; index++) {

        y.push(data[index])
    }
    console.log(y[0].nombre)

    for (let index = 0; index <= y.length; index++) {
        console.log('Katty' + [index])
    }
    console.log(y[0].nombre)
    

} */

window.onload = llamar_gatos();
/* dibujar_gatos(x); */









/* let items = [];
let x;

const fetchData = () => {
  return new Promise(async function (resolve, reject) {
    try {
      fetch('/api_cards_landing.json', {
        method: 'GET',
      })
      .then(function (res) { return res.json() })
      .then(function (data) {
        return resolve({
          error: null,
          items: data
        });
      });
    } catch (e) {
      return reject({
        error: e.message,
        items: null,
      });
    }
  })
}

async function init () {
  items = await fetchData();
  console.log(items)
  x = items;
  console.log(x[0]);
}

init(); */