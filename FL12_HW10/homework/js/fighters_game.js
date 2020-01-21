function Fighter(obj) {
    let name = obj.name,
        damage = obj.damage,
        fighterHp = obj.hp,
        strength = obj.strength,
        agility = obj.agility,
        currentHp = obj.hp;

    let wins = 0;
    let losses = 0;

    return {

        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => fighterHp,

        attack(def) {
            const success = 100;
            let probability = def.getAgility() + def.getStrength() >= success ?
                success : def.getAgility() + def.getStrength();

            if (Math.random() * success >= probability) {
                def.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${def.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        },

        logCombatHistory() {
            console.log(`Name: ${this.getName}, Wins: ${wins}, Losses: ${losses}`);
        },

        heal(points) {
            const health = this.getHealth() + points;
            fighterHp = health > currentHp ? currentHp : health;
        },

        dealDamage(pointsDmg) {

            let currentFighterHp = fighterHp - pointsDmg;
            currentFighterHp < 0 ? currentFighterHp = 0 : currentFighterHp;
            fighterHp = currentFighterHp;
        },

        addWin: () => wins++,
        addLoss: () => losses++
    };
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
        return;
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
        return;
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
            }
        }
        if (fighter1.getHealth() > 0) {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        } else {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
}

const fighter1 = new Fighter({
    name: 'Max',
    damage: 20,
    strength: 20,
    agility: 15,
    hp: 100
});
const fighter2 = new Fighter({
    name: 'Alex',
    damage: 30,
    strength: 50,
    agility: 25,
    hp: 100
});

battle(fighter1, fighter2);