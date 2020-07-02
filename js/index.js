const link = document.querySelector('a');
link.textContent = 'Test';
link.href = 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

// for (let i=1; 1<=10; i++){
// const p = document.createElement('p');
// p.textContent = i+ 'some text';
// sect.appendChild(p);
// }
const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));
linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formated');

$('.click-me').click( () => $('img').toggle(6000) );

const display=document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText
}


document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText
}

document.querySelector('.eq').addEventListener('click', calculate);
function calculate(){
    display.value = eval(display.value);
}

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

