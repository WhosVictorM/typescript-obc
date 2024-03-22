function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: "Millenium Falcon",
    pilot: "Han",
};
const xWing = {
    name: "Red Five",
    pilot: "Luke",
    weapons: 4,
    shields: 1,
};
const copy1 = cloneShip(falcon, "Milano", "Peter");
const copy2 = cloneShip(xWing, "Black One", "Poe");
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy');
const enemyCopy2 = cloneShip(falcon, 'Enemy', 'Enemy');
// Aqui temos um erro por conta do tipo Ship
// enemyCopy.flag = 'Imperial'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial';
