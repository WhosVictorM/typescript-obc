import { Spaceship } from "./exports";
import * as lodash from "lodash";

interface BattleSpaceship extends Spaceship{
    weapons: number
}

let xwing: BattleSpaceship = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4
}

console.log(lodash.camelCase(xwing.pilot))
console.log(lodash.kebabCase(xwing.pilot));