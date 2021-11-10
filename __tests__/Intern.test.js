const Intern = require('../lib/Intern');

test('creates new intern object', () => {
    const intern = new Intern('John Doe', 1, 'heresjohnny@shining.com', 'Overlook Prep School');
    expect(intern.name).toBe('John Doe');
    expect(intern.ID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern role', () => {
    const intern = new Intern('John Doe', 1, 'heresjohnny@shining.com', 'Overlook Prep School');
    expect(intern.getRole()).toBe('Intern');
});

test('gets intern school', () => {
    const intern = new Intern('John Doe', 1, 'heresjohnny@shining.com', 'Overlook Prep School');
    expect(intern.getSchool()).toBe('Overlook Prep School');
});