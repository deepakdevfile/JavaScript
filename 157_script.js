function populateHeader(obj){
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    const myPara = document.createElement("p");

    myH1.textContent = obj.squadName;
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    

    header.appendChild(myH1);
    header.appendChild(myPara);
}

function populateHeros(obj){
    const section = document.querySelector("section");
    const heros = obj.members;
    
    for(const hero in heros){
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = heros[hero].name;
        myPara1.textContent = `Secret identity: ${heros[hero].secretIdentity}`;
        myPara2.textContent = `Age: ${heros[hero].age}`;
        myPara3.textContent = "Superpowers:";

        const superPowers = heros[hero].powers;
        for (const power in superPowers){
            const listItem = document.createElement("li");
            listItem.textContent = superPowers[power];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

async function populate(){
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeros = await response.json();

    populateHeader(superHeros);
    populateHeros(superHeros);
}

populate();