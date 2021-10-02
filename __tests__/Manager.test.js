const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Test Manager', '001', 'test@test.com', '555-867-5309');

  expect(manager.name).toBe('Test Manager');
  expect(manager.id).toBe('001');
  expect(manager.email).toBe('test@test.com');
  expect(manager.officeNumber).toBe('555-867-5309');
});

test("gets manager's info through methods", () => {
  const manager = new Manager('Test Manager', '001', 'test@test.com', '555-867-5309');
  
  expect(manager.getName()).toBe(manager.name);
  expect(manager.getId()).toBe(manager.id);
  expect(manager.getEmail()).toBe(manager.email);
  expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
  expect(manager.getRole()).toBe('Manager');
});