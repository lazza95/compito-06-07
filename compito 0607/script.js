let display = document.querySelector('#display');
let displayPacco = document.querySelector('#displayPacco');

document.addEventListener('DOMContentLoaded',startTimer);
var s = 0, m = 0;
var sp = 0, mp = 0;

function startTimer() {
    interval = setInterval(function() {
    s++;
    if (s == 60) {
        m++;
        s = 0;
    }
    if ( m== 60){
        h++;
        m = 0;
    }
    localStorage.setItem('secondi',s);
    localStorage.setItem('minuti', m);
    sessionStorage.setItem('secondi',s);
    sessionStorage.setItem('minuti',m);
        
    }, 1000);
}

stampa = setInterval(function() {
    s = localStorage.getItem('secondi');
    m = localStorage.getItem('minuti');
    display.innerHtml = `${m} minuti ${s}secondi`;

sp = sessionStorage.getItem('secondi');
np = sessionStorage.getItem('minuti');
displayPacco.innerHTML = `${np} minuti ${sp} secondi`;
},
1000)  