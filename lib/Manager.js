const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.officeNumber = officeNumber;
    };
    getRole() {
        return 'Manager'
    };
};

module.exports = Manager;