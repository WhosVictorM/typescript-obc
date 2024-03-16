function sendSpaceship(spaceship: {pilot: string, copilot?:string}) {
    // ...
    
}

sendSpaceship({pilot: "Han Solo", copilot: "Chewbacca"})
sendSpaceship({pilot: "Luke"})



// ******************************************************** \\

let input: unknown // ou any

input = "Nome"
input = 12
input = []

let text: string = "Victor"


input = text

// ******************************************************** \\

function verification(test) {
    if (test) {
        
    } else {
        let _check: never
        return _check
    }
    
}