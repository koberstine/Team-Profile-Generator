const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
  const intern = new Intern('Test Intern', '001', 'test@test.com', 'UCF');

  expect(intern.name).toBe('Test Intern');
  expect(intern.id).toBe('001');
  expect(intern.email).toBe('test@test.com');
  expect(intern.school).toBe('UCF');
});

test("gets intern's info through methods", () => {
  const intern = new Intern('Test Intern', '001', 'test@test.com', 'UCF');
  
  expect(intern.getName()).toBe(intern.name);
  expect(intern.getId()).toBe(intern.id);
  expect(intern.getEmail()).toBe(intern.email);
  expect(intern.getSchool()).toBe(intern.school);
  expect(intern.getRole()).toBe('Intern');
});