generateCard = employee => {
    switch (employee.constructor.name){
        case 'Manager':
            return `
            <section class='card w-25 m-auto' style="filter:drop-shadow(1px 1px 5px black)">
                <div class='card-header list-group-item active'>
                    <h2 class='name'>${employee.name}</h2>
                    <h3 class='title'>
                        <span style="font-size: 1.2em; color: white;">
                            <i class="fas fa-mug-hot"></i>
                        </span></i>
                    ${employee.getRole()}</h3>
                </div>
                <ul class='list-group list-group-flush'>
                    <li class='id list-group-item'>Employee ID: ${employee.ID}</li>
                    <li class='email list-group-item'>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></li>
                    <li class='info list-group-item'>Office Number: ${employee.officeNumber}</li>
                </ul>
            </section>
            `
        case 'Engineer':
            return `
            <section class='card w-25 m-auto' style="filter:drop-shadow(1px 1px 5px black)">
                <div class='card-header list-group-item active'>
                    <h2 class='name'>${employee.name}</h2>
                    <h3 class='title'>
                        <span style="font-size: 1.2em; color: white;">
                            <i class="fas fa-glasses"></i>
                        </span></i>
                    ${employee.getRole()}</h3>
                </div>
                <ul class='list-group list-group-flush'>
                    <li class='id list-group-item'>Employee ID: ${employee.ID}</li>
                    <li class='email list-group-item'>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></li>
                    <li class='info list-group-item'>GitHub: <a href="${employee.getGithubUser()}" target="_blank">${employee.githubUser}</a></li>
                </ul>
            </section>
            `
        case 'Intern':
            return `
            <section class='card w-25 m-auto' style="filter:drop-shadow(1px 1px 5px black)">
                <div class='card-header list-group-item active'>
                    <h2 class='name'>${employee.name}</h2>
                    <h3 class='title'>
                        <span style="font-size: 1.2em; color: white;">
                            <i class="fas fa-user-graduate"></i>
                        </span></i>
                    ${employee.getRole()}</h3>
                </div>
                <ul class='list-group list-group-flush'>
                    <li class='id list-group-item'>Employee ID: ${employee.ID}</li>
                    <li class='email list-group-item'>Email:<a href="mailto:${employee.email}"> ${employee.email}</a></li>
                    <li class='info list-group-item'>School: ${employee.getSchool()}</li>
                </ul>
            </section>
            `
    };
};

module.exports = employees => {
    let cardArray = [];
    for (let i = 0; i < employees.length; i++) {
        cardArray += generateCard(employees[i]);
    }
return `<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <h1 class="text-center text-white bg-danger p-3 mb-5">My Team</h1>
        </header>
        
        <main>
            <div class="d-flex flex-wrap">
                ${cardArray}
            </div>
        </main>
    </body>
</html>`
};