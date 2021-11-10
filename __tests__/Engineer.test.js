const Engineer = require('../lib/Engineer');

test('creates new engineer object', () => {
    const engineer = new Engineer('John Doe', 1, 'heresjohnny@shining.com', 'githubUser');
    expect(engineer.name).toBe('John Doe');
    expect(engineer.ID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubUser).toEqual(expect.any(String));
})

test('gets engineer role', () => {
    const engineer = new Engineer('John Doe', 1, 'heresjohnny@shining.com', 'githubUser');
    expect(engineer.getRole()).toBe('Engineer')
})

test('gets engineer github', () => {
    const engineer = new Engineer('John Doe', 1, 'heresjohnny@shining.com', 'githubUser');
    expect(engineer.getGithubUser()).toBe(`https://github.com/${engineer.githubUser}`)
})