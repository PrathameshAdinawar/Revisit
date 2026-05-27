class Criketer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100
    }

    introduce() {
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | Stamina: ${this.stamina}`
    }
}

const player1 = new Criketer('virat', 'batsman')
const player2 = new Criketer('bumrah', 'bowler')

console.log(player1.introduce())// virat the batsman | matchesPlayed: 0 | Stamina: 100
console.log(player2.hasOwnProperty('name'))// true
console.log(typeof Criketer)// function

class Debutant {
    constructor(name) {
        this.name = name;
        this.walkout = () => `${this.name} walks out to bat`
    }
}

const debutant1 = new Debutant('someone')
const someone = debutant1.walkout()
console.log(someone)

const debutant2 = new Debutant('someone2')
console.log(debutant1.walkout === debutant2.walkout)// false



