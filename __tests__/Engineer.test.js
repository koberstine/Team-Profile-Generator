const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('Test Engineer', '001', 'test@test.com', 'testGithub');

  expect(engineer.name).toBe('Test Engineer');
  expect(engineer.id).toBe('001');
  expect(engineer.email).toBe('test@test.com');
  expect(engineer.github).toBe('testGithub');
});

test("gets engineer's info through methods", () => {
  const engineer = new Engineer('Test Engineer', '001', 'test@test.com', 'testGithub');
  
  expect(engineer.getName()).toBe(engineer.name);
  expect(engineer.getId()).toBe(engineer.id);
  expect(engineer.getEmail()).toBe(engineer.email);
  expect(engineer.getGithub()).toBe(engineer.github);
  expect(engineer.getRole()).toBe('Engineer');
});