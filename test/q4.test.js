const func = require('../q4')

const monster1 = {
  type: 'Zergling', legs: 4, speed: 'very fast'
}
const amount1 = 2

const monster2 = {
  type: 'Zombie', dmg: 2, hp: 10
}
const amount2 = 3

const monster3 = {}
const amount3 = 4

const output1 = [ 
  { id: 1, type: 'Zergling',legs: 4,  speed: 'very fast'}, 
 { id: 2, type: 'Zergling', legs: 4,  speed: 'very fast'}, 
 ] 
const output2 = [ 
{id: 1, type: 'Zombie', dmg: 2, hp: 10}, 

{id: 2, type: 'Zombie', dmg: 2, hp: 10}, 

{id: 3, type: 'Zombie', dmg: 2, hp: 10}, 
] 
const output3 = [{id: 1}, { id: 2}, { id: 3}, { id: 4}]
  


test('outputs the correct object 1', () => {
    expect(func(monster1,amount1)).toEqual(output1);
  });
  
test('outputs the correct object 2', () => {
  expect(func(monster2,amount2)).toEqual(output2);
});

test('outputs the correct object 3', () => {
  expect(func(monster3,amount3)).toEqual(output3);
});
