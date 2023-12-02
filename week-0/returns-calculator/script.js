document.getElementById('calculate').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    
    var result;
    result = num1 + num1*num2/100;
    for(let i=0;i<num3-1;i++){
        result = result + result*num2/100;
    }
    result = result.toFixed(3);
    document.getElementById('result').innerHTML = result;
});