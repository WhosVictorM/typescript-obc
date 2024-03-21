class Spaceship {
  private _name: string
  protected captain:string
  protected speed: number

  get name(){
    return this._name
  }

  set name(name:string){
    this._name = name
  }

  constructor(name:string, captain:string) {
    this.name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate:number, time:number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  protected weapons: number

  constructor(name:string, captain:string, weapons:number) {
    super(name, captain);
    this.weapons = weapons;
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  erase() {
    this.name = "";
    this.captain = "";
    this.speed = 0;
  }
}

let ship = new Spaceship("USS Enterprise", "James T. Kirk");
let fighter = new Fighter("X-Wing", "Luke Skywalker", 10)

fighter.accelerate(50, 10);
ship.accelerate(50, 10);

console.log(ship.name)
