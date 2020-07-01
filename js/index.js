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




const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString();
setInterval(showClock, 1000);

