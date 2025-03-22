

// function definitions
const rotateScene = function (event) {
 rY -= event.originalEvent.movementY / 2          
$scene.css( '--rY', rY+'deg');        
    $cupidFront.css( '--rY', -rY+'deg' );
    $youngmanFront.css('--rY',-rY+'deg');
    $birdFront.css('--rY',-rY+'deg');
}


// variable declarations
let $body = $('body');
let $scene = $('.scene');

let $cupidFront = $( '.cupid .front' );
let $youngmanFront = $('.youngman .front');
let $birdFront = $('.bird .front')

let rX = 0;
let rY = 0;


// script initialisation
$body.on('mousedown', function () {
    $body.on( 'mousemove', rotateScene )
});

$body.on('mouseup', function () {
    $body.off( 'mousemove', rotateScene )
});

$('.face').prop('draggable', false);



const $bird = $(".bird");
const speed = 100;
const moveBird = function (event) {
    let tX = Math.random() *100 -50 ;
    // let tY = Math.random() * 360 ;
    console.log(tX);
    $bird.css('left', tX + 'px');
    // $bird.css('top', tY + 'px');
}

$bird.on('mouseover', moveBird);




//music

const playButton = document.getElementById('playButton');
    const music = document.getElementById('music');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            playButton.style.animationPlayState = 'paused';
        } else {
            music.play();
            playButton.style.animationPlayState = 'running';
        }

        isPlaying = !isPlaying;
    });

