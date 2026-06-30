const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather(){
    const choice = select.value;

    let temperature = 55;

    if (choice === "sunny" && temperature < 86){
        para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
    } else if (choice === "sunny" && temperature >= 86) {
        para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
        // if (temperature < 86) {
        //     para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
        // } else if (temperature >= 86) {
        //     para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
        // }
        // para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    } else if(choice === "rainy"){
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out fot too long.";
    } else if(choice === "snowing"){
        para.textContent = "The snow is coming down - it is freezing! Best way to stay in with a cup of hot chocolate, or go build a snowman.";
    } else if(choice === "overcast"){
        para.textContent = 'It is not raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = "";
    }
}