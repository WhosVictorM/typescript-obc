type PlanetSituation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"

type PlanetCordinates = [number, number, number, number]

type Planet = {
    name: string,
    coordinates: PlanetCordinates,
    situation: PlanetSituation,
    sattelites: string[]
}

const planets: Planet[] = []

function addPlanet(name: string, coordinates: PlanetCordinates, situation: PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        sattelites: []
    })
    alert(`O Planeta ${name} foi registrado com sucesso!`)
}

function findPlanet(name:string) {
    const planet = planets.find(planet => planet.name === name)
    return planet ?? false
}

function updateSitiation(situation: PlanetSituation, planet: Planet) {
    planet.situation = situation
    alert(`A situação do Planeta ${planet.name} foi alterada para ${situation}`)
}

function addSatellite(name: string, planet: Planet) {
    planet.sattelites.push(name)
    alert(`O satélite ${name} foi adicionado ao Planeta ${planet.name}`)
}

function removeSatellite(name: string, planet: Planet) {
    planet.sattelites = planet.sattelites.filter(satellite => satellite !== name)
    alert(`O satélite ${name} foi removido do Planeta ${planet.name}`)
}