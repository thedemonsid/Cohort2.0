var sequence = [];
var button = document.querySelectorAll(".btn");

var sounds = {
    red: new Audio('./sounds/red.mp3'),
    blue: new Audio('./sounds/blue.mp3'),
    green : new Audio('./sounds/green.mp3'),
    yellow : new Audio('./sounds/yellow.mp3'),
    wrong : new Audio('./sounds/wrong.mp3')
}
for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){

        const color = button[i].getAttribute('id');
        sequence.push(color);
        
        $(button[i]).fadeOut(100).fadeIn(100);

        sounds[color].play();
       // alert(`${color}`);
    });
}
