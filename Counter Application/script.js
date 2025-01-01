let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrease');
let value = document.getElementById('value');
increase.onclick = function() {
    let current = parseInt(value.textContent);
    count.textContent = current + 1;
}