//Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let Desplazamiento_Actual = window.pageYOffset;

    if (Desplazamiento_Actual <= 700) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#361500';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#FDD2BF';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

/*window.addEventListener('load', function(){
   $('#onload').fadeOut();
    $('body').remove('hidden');
    menus();
});*/

window.addEventListener('click', function (e) {
    console.log(e.target)
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
})

window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    menus();
});

window.addEventListener('resize', function () {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function () {
    apertura();
});
