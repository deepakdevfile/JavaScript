const people = [
    "Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let num = people.length;
let entry = true;
let para;
while(num > 0){
    entry = confirm(people[num - 1]);
    para = document.createElement("p");
    para.textContent = people[num];
    if(entry){
        admitted.appendChild(para);
    }else{
        refused.appendChild(para);
    }
    num--;
}