const output = document.querySelector(".output");
output.textContent = "";

let i = 10;
while(i > 0){
    let para = document.createElement('p');
    para.textContent = `Countdown ${i} \n\n`;
    output.appendChild(para);
    i--;
}

let para = document.createElement('p');
para.textContent = `Engine ignition \n\n`;
output.appendChild(para);

para.textContent = `Liftoff \n\n`;
output.appendChild(para);