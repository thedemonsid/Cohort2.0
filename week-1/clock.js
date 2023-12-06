setInterval(function(){
console.clear();
let temp = new Date();
let hours = temp.getHours();
let min = temp.getMinutes();
let sec = temp.getSeconds();
console.log(`${hours}:${min}:${sec}`);

},1000)