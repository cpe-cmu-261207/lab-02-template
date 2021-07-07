const func = require('../q1')

  test('outputs the correct string 1', () => {
    expect(func([1,2,3])).toMatch("123");
  });
  
  test('outputs the correct string 2', () => {
    expect(func([10,9,8,7,6,5])).toMatch("1098765")
  });
  
  test('outputs the correct string 3', () => {
    expect(func([])).toMatch("");
  });
  