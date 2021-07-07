const func = require('../q5')

const input1 = [ 
  {id: 1, power: 5, members: []}, 
  {id: 2, power: 30, members: []}, 
  {id: 3, power: 60, members: []}, 
  {id: 4, power: 42, members: []}, 
  {id: 5, power: 70, members: []}, 
] 
const input2=[5, 2, 4, 3, 1, 3]
const output = { id: 3, power: 107, 
  members: [ 4, 1 ] 
}


test('outputs the correct object 1', () => {
    expect(func(input1,input2)).toEqual(output);
  });
