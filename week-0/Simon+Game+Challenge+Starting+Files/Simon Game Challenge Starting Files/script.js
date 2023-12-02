var sequence = [];
var button = document.querySelectorAll(".btn");

var sounds = {
    red: new Audio('./sounds/red.mp3'),
    blue: new Audio('./sounds/blue.mp3'),
    green : new Audio('./sounds/green.mp3'),
    yellow : new Audio('./sounds/yellow.mp3'),
    wrong : new Audio('./sounds/wrong.mp3')
}
function buttonClicked(){
    const color = this.getAttribute('id');
    $(this).fadeOut(100).fadeIn(100);
    sounds[color].play();
}
for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',buttonClicked)
};

function gameStart(){
       let i = Math.floor(Math.random()*4);
       $(button[i]).fadeOut(100).fadeIn(100);
       var color = button[i].getAttribute('id');
       sounds[color].play();
       sequence.push(i);
}
window.addEventListener('keydown', function(event) {
    document.querySelector('h1').innerHTML='hmm';
    gameStart();
});