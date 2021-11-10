const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
    getRole() {
        return 'Intern'
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;