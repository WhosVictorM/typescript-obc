interface CelestialBody {
  name: string;
  mass: number;
}

interface Star extends CelestialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestialBody {
  population: number;
  createSatellite: (name: string) => void;
}

let sun: Star = {
  name: "Sol",
  age: 15 * 10 ** 10,
  mass: 50 * 10 ** 30,
  planets: [],
};

class MilkyWayPlanet implements Planet {
  population: number;
  name: string;
  mass: number;
  constructor(name: string, mass: number, population: number) {
    this.name = name;
    this.mass = mass;
    this.population = population;
  }
  createSatellite(name: string) {
    //...
  }
}
