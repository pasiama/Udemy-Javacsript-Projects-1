let increase = document.getElementById('increase');
let reset = document.getElementById('reset');
let decrease = document.getElementById('decrease');
let value = document.querySelector('#value');
 
const btns = document.querySelectorAll('.btn');
btns.forEach(btn=>{
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let val = parseInt(value.textContent);
        switch(this.id){
            case 'increase':
                val++;
                break;
            case 'decrease':
                val--;
                break;
            case'reset':
                val = 0;
                break;
        }
        value.textContent = val;
    })
})