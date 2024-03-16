const spaceships = [];
function newSpaceship(name, pilot, crew_limit) {
    const spaceship = {
        name,
        pilot,
        crew_limit,
        crew: [],
        in_mission: false
    };
    alert(`The Spaceship ${spaceship.name} commanded by ${pilot} was added to the fleet`);
    spaceships.push(spaceship);
    return spaceship;
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => ship.name === name);
    return spaceship;
}
function addCrewMembers(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crew_limit) {
        alert(`${member} can't be added at the crew, MAX LIMIT REACHED!`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} was successfully added to ${spaceship.name} crew.`);
    }
}
function sendSpaceshipInMission(spaceship) {
    if (spaceship.in_mission) {
        alert(`${spaceship.name} Already in mission!`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crew_limit / 3)) {
        alert(`Can't send ${spaceship.name} in mission, because they don't have enough members.\nTotal Crew: ${spaceship.crew.length}
        \nMinimum: ${Math.floor(spaceship.crew_limit / 3)}`);
    }
    else {
        spaceship.in_mission = true;
        alert(`Successfully send ${spaceship.name} in mission.`);
    }
}
function firstMenuOption() {
    const spaceshipName = prompt("Insert the Spaceship Name");
    const spaceshipPilot = prompt("Insert the Spaceship Pilot Name");
    const spaceshipLimit = Number(prompt("Insert the Spaceship Crew Limit"));
    const confirmation = confirm(`Confirm your Spaceship Data\nSpaceship Name: ${spaceshipName}\nPilot: ${spaceshipPilot}\nCrew Limit: ${spaceshipLimit}`);
    if (confirmation) {
        newSpaceship(spaceshipName, spaceshipPilot, spaceshipLimit);
    }
}
function secondMenuOption() {
    const spaceshipName = prompt("Insert a Ship Name to add a Crew Member.");
    if (findSpaceship(spaceshipName)) {
        const crewMemberName = prompt("Insert the Member's Name.");
        const confirmation = confirm(`Confirm ${crewMemberName} in ${spaceshipName} crew?`);
        if (confirmation) {
            addCrewMembers(crewMemberName, findSpaceship(spaceshipName));
        }
    }
}
function thirdMenuOption() {
    let spaceshipName = prompt(`Wich Spaceship you want to send IN MISSION?`);
    const space = findSpaceship(spaceshipName);
    if (space) {
        sendSpaceshipInMission(space);
    }
}
function fourthMenuOption() {
    let list = "Spaceships registered:\n";
    spaceships.forEach((space) => {
        list +=
            `Spaceship: ${space.name}
        \nPilot: ${space.pilot}
        \nIn Mission? ${space.in_mission}
        \nCrew Limit: ${space.crew_limit}
        \nCrew: ${space.crew.length}`;
        space.crew.forEach(member => {
            list += ` - ${member}\n`;
        });
    });
    alert(list);
}
while (true) {
    let resposta = Number(prompt("1. Add Spaceship\n2. Add Member\n3. Send in Mission\n4. List all\n0. Exit"));
    if (resposta === 1) {
        firstMenuOption();
    }
    else if (resposta === 2) {
        secondMenuOption();
    }
    else if (resposta === 3) {
        thirdMenuOption();
    }
    else if (resposta === 4) {
        fourthMenuOption();
    }
    else if (resposta === 0) {
        break;
    }
}
