var input = document.getElementById('input');

getValue = (value) => {
    input.value += value;
}

clearValue = () => {
    input.value = input.value.substring(0, input.value.length - 1);
}

getCompleteValue = () => {
    input.value = eval(input.value);    
}