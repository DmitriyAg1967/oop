export default class Character {
    constructor(name, type) {
        if (name === undefined || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('нельзя повысить левел умершего');
        }
        this.level += 1;
        this.health = 100;
        this.attack *= 1.2;
        this.defense *= 1.2;
    }

    damage(points) {
        if (this.health === 0) {
            throw new Error('расчет невозможен');
        }
        this.health -= points * (1 - this.defense / 100);
    }
}

export class Bowerman extends Character {
    constructor(name, type) {
        if (type != 'Bowerman') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type) {
        if (type != 'Swordsman') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type) {
        if (type != 'Magician') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        if (type != 'Daemon') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type) {
        if (type != 'Undead') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        if (type != 'Zombie') {
            throw new Error('Неправильный тип игрового персонажа.');
        }
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}
