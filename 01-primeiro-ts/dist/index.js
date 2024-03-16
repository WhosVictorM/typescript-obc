function sendspaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`The Spaceship ${spaceship.name} commanded by ${spaceship.captain} was sent in Mission.`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Lowering the ${spaceship.name} speed to ${targetSpeed}`);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Increasing the ${spaceship.name} speed to ${targetSpeed}`);
    }
    else {
        alert(`Keeping ${spaceship.name} speed at ${targetSpeed}`);
    }
}
const spaceshipName = prompt("Insert the Spaceship Name.");
const spaceshipCaptain = prompt("Insert the Spaceship Captain's name.");
const currentSpaceship = sendspaceship(spaceshipName, spaceshipCaptain);
const speed = Number(prompt("Insert the Spaceship speed."));
accelerate(speed, currentSpaceship);
