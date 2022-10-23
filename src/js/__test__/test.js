import Character from '../app';

import { Bowerman } from '../app';
import { Swordsman } from '../app';
import { Magician } from '../app';
import { Daemon } from '../app';
import { Undead } from '../app';
import { Zombie } from '../app';

const referencebowerman = {
  name: 'Bowerman',
  type: 'Bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25
};

const referenceswordsman = {
  name: 'Swordsman',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10
}
const referencemagician = {
  name: 'Magician',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40
}
const referencedaemonn = {
  name: 'Daemon',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40
}
const referenceundead = {
  name: 'Undead',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25
}
const referencezombie = {
  name: 'Zombie',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10
}

test('Не верное имя', () => {
  expect(() => new Character('Bowerman1111', 'Bowerman')).toThrow();
});

test('bowermantest', () => {
  const bowerman = new Bowerman('Bowerman', 'Bowerman')
  expect(referencebowerman).toEqual(bowerman);
});

test('swordsmantest', () => {
  const swordsman = new Swordsman('Swordsman', 'Swordsman')
  expect(referenceswordsman).toEqual(swordsman);
})

test('magiciantest', () => {
  const magician = new Magician('Magician', 'Magician')
  expect(referencemagician).toEqual(magician);
});

test('daemontest', () => {
  const daemon = new Daemon('Daemon', 'Daemon')
  expect(referencedaemonn).toEqual(daemon);
});

test('undeadtest', () => {
  const undead = new Undead('Undead', 'Undead')
  expect(referenceundead).toEqual(undead);
});

test('zombietest', () => {
  const zombie = new Zombie('Zombie', 'Zombie')
  expect(referencezombie).toEqual(zombie);
});

test('Повышаем уровень персонажа', () => {
  const description = new Character('Bowerman');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'Bowerman', health: 100, level: 2, attack: 12, defense: 12,
  };
  expect(description).toEqual(result);
});

test('нельзя повысить левел умершего', () => {
  function test() {
    const description = new Character('Bowerman');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});

test('Расчитываем урон персонажа', () => {
  const description = new Character('Bowerman');
  console.log(description);
  description.damage(100);
  const result = {
    name: 'Bowerman', type: undefined, health: NaN, level: 1
  };
  expect(description).toEqual(result);
});

test('расчет невозможен', () => {
  function test() {
    const description = new Character('Bowerman');
    description.health = 0;
    return description.damage();
  }
  expect(test).toThrow('расчет невозможен');
});
