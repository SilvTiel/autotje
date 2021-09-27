let log = console.log;
let beweging = 20;
let auto = document.querySelector('.auto');

document.addEventListener('DOMContentLoaded', init);

function init(){
    document.body.addEventListener('keydown', anyKey);
}

function anyKey(ev){
    // log(ev);
    let char = ev.which;
    log(char);
}

window.addEventListener('load', () => {
    auto.style.position = 'absolute';
    auto.style.left = 0;
    auto.style.top = 0;
});

window.addEventListener('keydown' , (e) => {

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
            auto.style.top = parseInt(auto.style.top) - beweging + 'px';
            auto.style.transform = 'rotate(0deg)';
            break;
        case 'ArrowRight':
        case'd':
            auto.style.left = parseInt(auto.style.left) + beweging + 'px';
            auto.style.transform = 'rotate(90deg)';
            break;
        case 'ArrowDown':
        case's':
            auto.style.top = parseInt(auto.style.top) + beweging + 'px';
            auto.style.transform = 'rotate(180deg)';
            break;
        case 'ArrowLeft':
        case'a':
            auto.style.left = parseInt(auto.style.left) - beweging + 'px';
            auto.style.transform = 'rotate(270deg)';
            break;
        case 'h':
            play();
            break;
        case 'i':
            verrandering();
            break;
        case 'o':
            color();
            break;

    }
})

function play() {
    var audio = new Audio('meep-meep.wav');
    audio.play();
  }

  function verrandering(){
          auto.style.backgroundImage = "url('afbeeldingen/car-top.svg')"
  }

  function color(){
    auto.style.backgroundImage = "url('afbeeldingen/car.png')"
  }