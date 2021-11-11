const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const writeFile = require('./src/write-HTML');
const employees = [];

//prompt user for managers infomration then push to employee array
const promptManager = async () => {
    console.log(`
    ================
    = Manager Info =
    ================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name: ",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the manager's name: ");
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'ID',
            message: "Enter team manager's employee ID number:",
            validate: IDInput => {
                if (IDInput) {
                  return true;
                } else {
                  console.log("Please enter the manager's employee ID number: ");
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team manager's email address: ",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter the manager's email address: ");
                  return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter team manager's office number: ",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log("Please enter the manager's name: ");
                  return false;
                }
            } 
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        employees.push(manager);
    });
};

// prompt user for employee infomration and push appropriate role to employee array
const promptEmployee = async () => {
    console.log(`
    =================
    = Employee Info =
    =================
    `);
    return inquirer.prompt([
        {
        type: 'list',
        name: 'employeeType',
        message: 'Would you like to add an Engineer or Intern to the team?',
        choices: ['Engineer', 'Intern'],
        default: ['Engineer']
        }
    ])
    .then((answer) => {
        if (answer.employeeType === 'Engineer') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter engineer's name: ",
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log("Please enter the engineer's name: ");
                          return false;
                        }
                    }  
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "Enter engineer's employee ID number: ",
                    validate: IDInput => {
                        if (IDInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer's employee ID number: ");
                        return false;
                        }
                    } 
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter engineer's email address: ",
                    validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer's email address: ");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Enter engineer's Github username: ",
                    validate: githubUserInput => {
                        if (githubUserInput) {
                        return true;
                        } else {
                        console.log("Please enter the engineer's Github name: ");
                        return false;
                        }
                    } 
                }
            ])
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
                employees.push(engineer);
                return newEmployeeConfirm();
            });
        } else {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Enter intern's name: ",
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log("Please enter the intern's name: ");
                          return false;
                        }
                    }  
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "Enter intern's employee ID number: ",
                    validate: IDInput => {
                        if (IDInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern's employee ID number: ");
                        return false;
                        }
                    } 
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Enter intern's email address: ",
                    validate: emailInput => {
                        if (emailInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern's email address: ");
                        return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Enter intern's school: ",
                    validate: schoolInput => {
                        if (schoolInput) {
                        return true;
                        } else {
                        console.log("Please enter the intern's school: ");
                        return false;
                        }
                    } 
                }
            ])
            .then((answers) => {
                const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
                employees.push(intern);
                return newEmployeeConfirm();
            });
        }
    });
};

// prompt user if they want to add another engineer/intern or complete setup
const newEmployeeConfirm = async () => {
    console.log(`
    ===================
    = More Employees? =
    ===================
    `);
    return inquirer.prompt([
        {
        type: 'list',
        name: 'anotherEmployee',
        message: 'Would you like to add more team members?',
        choices: ['Yes', 'No (finish team setup)'],
        default: ['No (finish team setup)']
        }
    ])
    .then((answer) => {
        if (answer.anotherEmployee === 'Yes') {
            return promptEmployee();
        } else {
            console.log('Team setup complete with information below:');
            console.log(employees);
            return employees;
        };
    });
};

//execute functions when index.js is ran and generate HTML
promptManager()
    .then(promptEmployee)
    .then(employees => {
        return generatePage(employees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    });