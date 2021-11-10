const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, githubUser) {
        super(name, ID, email);
        this.githubUser = githubUser;
    };
    getRole() {
        return 'Engineer'
    };
    getGithubUser() {
        return `https://github.com/${this.githubUser}`
    };
};

module.exports = Engineer;