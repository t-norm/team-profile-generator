const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('John Doe', 1, 'heresjohnny@shining.com', 666);
    expect(manager.name).toBe('John Doe');
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toBe(666);
});

test('gets manager role', () => {
    const manager = new Manager('John Doe', 1, 'heresjohnny@shining.com', 666);
    expect(manager.getRole()).toBe('Manager');
});