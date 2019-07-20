class Fighter {
    constructor(object) {
        this.name = object.name;
        this.damage = object.damage;
        this.hp = object.hp;
        this.agility = object.agility;

        this.totalHp = object.hp;
        this.win = 0;
        this.loss = 0;
    }

    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getHealth() {
        return this.hp;
    }
    getAgility() {
        return this.agility;
    }
    attack(enemyDefender) {
        let enemyDefenceValue = enemyDefender.agility;
        let attackValue = Math.floor(Math.random() * 101);
        if (attackValue > enemyDefenceValue) {
            console.log(this.name + ' make '+ this.damage +' damage to ' + enemyDefender.name);
            enemyDefender.dealDamage(this.damage);
        } else {
            console.log(this.name + ' attack missed');
        }
    }
    logCombatHistory() {
        console.log('Name: '+ this.name +', Wins: '+ this.win +', Losses: ' + this.loss);
    }
    heal(healPoint) {
        this.hp += healPoint;
        if (this.hp > this.totalHp) {
            this.hp = this.totalHp;
        }
        console.log(this.name + ' heal ' + healPoint + 'hp')
    }
    dealDamage(damagePoint) {
        this.hp -= damagePoint;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
    addWin() {
        this.win++;
    }
    addLoss() {
        this.loss++;
    }
}

function lossScenario(lossFighter, winFighter) {
    winFighter.addWin();
    lossFighter.addLoss();

    console.log(lossFighter.name + " is dead and can't fight")
    winFighter.logCombatHistory();
    lossFighter.logCombatHistory();
}

function battle(fighter1, fighter2) {
    fighter1.attack(fighter2);
    if(fighter2.hp === 0) {
        lossScenario(fighter2, fighter1);
    }
    fighter2.attack(fighter1);
    if(fighter1.hp === 0) {
        lossScenario(fighter1, fighter2);
    }
}