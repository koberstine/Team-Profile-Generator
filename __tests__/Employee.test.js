const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Test Employee', '001', 'test@test.com');

  expect(employee.name).toBe('Test Employee');
  expect(employee.id).toBe('001');
  expect(employee.email).toBe('test@test.com');
});

test("gets employee's info through methods", () => {
  const employee = new Employee('Test Employee', '001', 'test@test.com');
  
  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');
});