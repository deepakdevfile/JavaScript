const results = document.querySelector("p");
results.textContent = "";
function calculate(){
    for(let i = 1; i < 10; i++){
        const newResult = `${i} x ${i} = ${i*i}`;
        results.textContent = results.textContent + `${newResult} \n\n`;
    }
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", ()=>{results.textContent = ""});