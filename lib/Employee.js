class Employee {
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    };
    getName() {
        return {
            name: this.name
        }
    };
    getID() {
        return {
            ID: this.ID
        }
    };
    getEmail() {
        return {
            email: this.email
        }
    };
    getRole() {
        return 'Employee'
    };
};

module.exports = Employee;