class Character {
    constructor(name, type, health, level, attack, defence) {
        try { 
            if(name.length < 2 || name.length > 10) throw "не то количество букв";
        }
        catch(err) {
            console.log ("Вы ввели " + err);
            return
        }

        try { 
            if (type != 'Bowerman' && type != 'Swordsman' && type != 'Magician' && type != 'Daemon' && type != 'Undead' && type != 'Zombie') throw "неправильный тип игрового персонажа.";
        }
        catch(err) {
            console.log ("Вы ввели " + err);
            return
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}


class Bowerman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}


class Swordsman extends Character{
    constructor (name, type, health, level, attack, defence){
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;  
    } 
}


 
class Magician extends Character{
    constructor (name, type, health, level, attack, defence){
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;  
    } 
}


class Daemon extends Character{
    constructor (name, type, health, level, attack, defence){
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;  
    } 
}


class Undead extends Character{
    constructor (name, type, health, level, attack, defence){
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;  
    } 
}


class Zombie extends Character{
    constructor (name, type, health, level, attack, defence){
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;  
    } 
}

export let bowerman1111 = new Bowerman('Bowerman1111', 'Bowerman', null, null, null, null);
export let bowerman2222 = new Bowerman('Bowerman', 'Bowerman2222', null, null, null, null);
export let bowerman = new Bowerman('Bowerman', 'Bowerman', null, null, null, null);
export let swordsman = new Swordsman('Swordsman', 'Swordsman', null, null, null, null);
export let magician = new Magician('Magician', 'Magician', null, null, null, null);
export let daemon = new Daemon('Daemon', 'Daemon', null, null, null, null);
export let undead = new Undead('Undead', 'Undead', null, null, null, null);
export let zombie = new Zombie('Zombie', 'Zombie', null, null, null, null);
