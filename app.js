function clearInput(){
var result = document.getElementById('result');
result.value = '';
}

function calculatorAnswer(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
    console.log(result.value)
}

function addNum(num){
    var result = document.getElementById('result');
     result.value += num;
    console.log(result);
}