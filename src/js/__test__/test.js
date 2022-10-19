// import {Character} from '../app';

import {bowerman2222} from '../app';
import {bowerman1111} from '../app';
import {bowerman} from '../app';
import {swordsman} from '../app';
import {magician} from '../app';
import {daemon} from '../app';
import {undead} from '../app';
import {zombie} from '../app';

const referencebowerman2222 = {"attack": 25, "defence": 25};

const referencebowerman1111 = {"attack": 25, "defence": 25};

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
const referencemagician =  {
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

test('bowerman2222test', () => {
  console.log(bowerman2222)
  expect(referencebowerman2222).toEqual(bowerman2222);
});

test('bowerman1111test', () => {
  console.log(bowerman1111)
  expect(referencebowerman1111).toEqual(bowerman1111);
});

test('bowermantest', () => {
  expect(referencebowerman).toEqual(bowerman);
});

test('swordsmantest', () => {
  expect(referenceswordsman).toEqual(swordsman);
});

test('magiciantest', () => {
  expect(referencemagician).toEqual(magician);
});

test('daemontest', () => {
  expect(referencedaemonn).toEqual(daemon);
});

test('undeadtest', () => {
  expect(referenceundead).toEqual(undead);
});

test('zombietest', () => {
  expect(referencezombie).toEqual(zombie);
});
