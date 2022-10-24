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

let age_min_value;
let age_max_value;

async function llamar_gatos() {
    const response = await fetch('api_cards_landing.json')
    const gatos = await response.json()
    dibujar_gatos(gatos);

        check_age(gatos);
        let sex_draw = check_sex(gatos);
        check_color(gatos);


/*         $('#filter_cat').click(function () {
            console.log('Entré a Draw')
            console.log('Hola ' + sex_draw)
        }); */

    /* dibujar_gatos(gatos.filter((cat) => cat.edad>5 && cat.edad <10)); */

    /* dibujar_gatos(gatos.filter((cat) => cat.nombre.includes('ia'))); */

    /* dibujar_gatos(gatos.filter((cat) => cat.edad>5 && cat.edad <10)); */
    /* dibujar_gatos(gatos.filter((cat) => cat.color === 'amarillo')); */

}

function check_age(gatos){
    $('#filter_cat_age').click(function () {
        console.log('Entré a Age')
        let x = document.getElementById('add_cats');

        console.log('El valor min es ' + age_min_value + ' y El valor max es ' + age_max_value)
        x.innerHTML = '';
        dibujar_gatos(gatos.filter((cat) => cat.edad>=age_min_value && cat.edad <= age_max_value))

    });
}

function check_sex(gatos){
    $('#filter_cat_sex').click(function () {
        console.log('Entré a sex')
        let x = document.getElementById('add_cats');

        if ($('input[name=sex_m]').is(':checked')) {
            x.innerHTML = ''
            dibujar_gatos(gatos.filter((cat) => cat.sexo === 'macho'));
            return('macho');
        } else if ($('input[name=sex_h]').is(':checked')) {
            x.innerHTML = ''
            dibujar_gatos(gatos.filter((cat) => cat.sexo === 'hembra'));
        } else {
            x.innerHTML = ''
            dibujar_gatos(gatos.filter((cat) => cat.sexo === 'macho' || cat.sexo === 'hembra'));
        }

    });
}

function check_color(gatos){
    $('#filter_cat_color').click(function () {
        let x = document.getElementById('add_cats');
        /*         let y = $('add_cats');
                y.innerHTML = ''; */
        let color_value = document.getElementById('filtro_color').value;
        let color = document.getElementById('filtro_color');


        // Why this dont work!?
        // $('#add_cats').innerHTML = '';
        x.innerHTML = ''
        console.log('Manolo')

        dibujar_gatos(gatos.filter((cat) => cat.color === color_value));
        color.value = '';

        /* 
            Por qué no funciona con jQuery?????????
            let color_value = $('#filtro_color').value;
            console.log(color_value); */
    });
}

function check_sex_m() {
    /* $('#checkh').attr('disabled', false) */

    /* 
        $('#checkh').attr('disabled', true)
        alert('Hola'); */

    if ($('#checkm').is(':checked')) {
        $('#checkh').attr('disabled', true)
    } else {
        $('#checkh').attr('disabled', false)
    }
}

function check_sex_h() {

    if ($('#checkh').is(':checked')) {
        $('#checkm').attr('disabled', true)
    } else {
        $('#checkm').attr('disabled', false)
    }

}


function rotate_container() {
    $('.container').toggleClass('container_rotate')
}

function getvaluerange() {
    console.log('Hola')
    age_min = $('#filtro_edad_range_min').val()
    age_max = $('#filtro_edad_range_max').val()
    let min_edad_cat = document.getElementById('min_edad');
    let max_edad_cat = document.getElementById('max_edad');

    min_edad_cat.innerText = age_min;
    max_edad_cat.innerText = age_max;

    age_min_value = age_min;
    age_max_value = age_max;

    console.log(age_min_value)
    console.log(age_max_value)
}

$('.filtro__title__rspnsv').click(function () {
    $('.color_list_rspnsv').fadeIn();

});

$('.close_filters svg').click(function () {
    $('.color_list_rspnsv').fadeOut();
});






/* $('input[type=checkbox]').on('change', function() {
    alert("Pruebas")
}); */

function dibujar_gatos(data) {

    console.log('Entré')
    let cont_cats = document.getElementById('add_cats');

    for (let i = 0; i < data.length; i++) {
        let box_back_cat = `<div class="box_card">
        <div class="container" onclick="rotate_container()">
            <div class="front card">
                <div>
                    <img src="${data[i].foto}" alt="gatito en adopción de color ${data[i].color}">
                </div>

            </div>
            <div class="back card">
                <div class="cont_back_card">
                    <ul>
                        <li><p>Nombre:</p> <span>${data[i].nombre}</span></li>
                        <li><p>Edad:</p> <span class="sex_cat">${data[i].edad}</span></li>
                        <li><p>Sexo:</p> <span>${data[i].sexo}</span></li>
                        <li><p>Color:</p> <span>${data[i].color}</span></li>
                        <li><p>Esterilizado:</p> <span>${data[i].esterilizado}</span></li>
                        <li><p>Vacunado:</p> <span>${data[i].vacunado}</span></li>
                        <li><p>Discapacidad:</p> <span>${data[i].discapacidad}</span></li>
                        <li><p>Estado:</p> <span>${data[i].estado}</span></li>
                        <button class="button btn_cats_adopt_me" onclick="adopt_me()">¡Adóptame!</button>
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

function adopt_me(){
    
    console.log('click');
    $(".overlay_form").addClass("active_form_overlay");
    console.log('click_overlay');
    $(".popup_form").addClass("active_form");
    

}

$(".btn-cerrar-popup").click( e=> {
    e.preventDefault();
    console.log('click');
	$(".overlay_form").removeClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").removeClass("active_form");

});


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
                <img src="${data[i].foto}" class="card__img" alt="gatito en adopción de color ${data[i].color}" >
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