const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('John Doe', 1, 'heresjohhny@shining.com');
    expect(employee.name).toBe('John Doe');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employees name', () => {
    const employee = new Employee('John Doe', 1, 'heresjohhny@shining.com');
    expect(employee.getName()).toHaveProperty('name');
});

test('gets employees ID number', () => {
    const employee = new Employee('John Doe', 1, 'heresjohhny@shining.com');   
    expect(employee.getID()).toHaveProperty('ID');
});

test('get the employee email', () => {
    const employee = new Employee('John Doe', 1, 'heresjohhny@shining.com');  
    expect(employee.getEmail()).toHaveProperty('email');
});

test('get the employee role', () => {
    const employee = new Employee('John Doe', 1, 'heresjohhny@shining.com');
    expect(employee.getRole()).toBe('Employee');
});