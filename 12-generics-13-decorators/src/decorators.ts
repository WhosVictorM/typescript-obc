
function Log(){
    return function (target, key, descriptor){
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]){
            console.log(`----------------------------`);
            console.log(`Calling the Method ${key} with params: ${JSON.stringify(args)}`);

            const result = originalMethod.apply(this, args)
            console.log(`The Method ${key} return the value: ${JSON.stringify(result)}`);
            console.log(`----------------------------`);
            return result
        }
    }
}


class Planet {
    name: string

    constructor(name:string) {
        this.name = name
    }

    @Log()
    calculate(value:number){
        console.log(`Calculating ${value} x 2 `)
        return value * 2
    }

    @Log()
    invertName(){
        return this.name.split("").reverse().join("")
    }
}

const planet = new Planet("Terra")

const result = planet.calculate(5)


console.log(`Result = ${result}`);
planet.invertName()