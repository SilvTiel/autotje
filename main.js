let log = console.log;
let beweging = 20;
let auto = document.querySelector('.auto');

window.addEventListener('load', () => {
    auto.style.position = 'absolute';
    auto.style.left = 0;
    auto.style.top = 0;
});

window.addEventListener('keydown' , (e) => {

    switch (e.key) {
        case 'ArrowUp': //W
            auto.style.top = parseInt(auto.style.top) - beweging + 'px';
            break;
        case 'ArrowRight': //D
            auto.style.left = parseInt(auto.style.left) + beweging + 'px';
            break;
        case 'ArrowDown'://S
            auto.style.top = parseInt(auto.style.top) + beweging + 'px';
            break;
        case 'ArrowLeft'://A
            auto.style.left = parseInt(auto.style.left) - beweging + 'px';
            break;

    }
})
// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     document.body.addEventListener('keydown', anyKey);
// }

// function anyKey(ev){
//     log(ev);
//     let char = ev.which;
//     log(char);
// }
