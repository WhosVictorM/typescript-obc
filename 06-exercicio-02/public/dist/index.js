const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        sattelites: []
    });
    alert(`O Planeta ${name} foi registrado com sucesso!`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}
function updateSitiation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do Planeta ${planet.name} foi alterada para ${situation}`);
}
function addSatellite(name, planet) {
    planet.sattelites.push(name);
    alert(`O satélite ${name} foi adicionado ao Planeta ${planet.name}`);
}
function removeSatellite(name, planet) {
    planet.sattelites = planet.sattelites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do Planeta ${planet.name}`);
}
