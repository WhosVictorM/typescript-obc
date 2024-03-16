let literal: "Hello World"
let pi: 3.1459

const teste = 5

let option: "Yes" | "No"

option = "Yes"

type Planet = "Mercúrio" | "Venus" | "Terra" | "Marte"

let planet: Planet

function checkPlanet(planet: Planet) {
    if(planet === "Terra"){
        console.log("We Are On Earth");
    }
}