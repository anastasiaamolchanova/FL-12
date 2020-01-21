function Fighter(obj) {
    let name = obj.name,
        damage = obj.damage,
        fighterHp = obj.hp,
        strength = obj.strength,
        agility = obj.agility,
        currentHp = obj.hp,
        wins = 0,
        losses = 0;

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

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight`);
        return;
    } else if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight`);
        return;
    } else {
        while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter);
            if (secondFighter.getHealth() > 0) {
                secondFighter.attack(firstFighter);
            }
        }
        if (firstFighter.getHealth() > 0) {

            firstFighter.addWin();
            secondFighter.addLoss();
            console.log(`${firstFighter.getName()} has won!`);
        } else {
            secondFighter.addWin();
            firstFighter.addLoss();
            console.log(`${secondFighter.getName()} has won!`);
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