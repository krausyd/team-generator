const getIcon = (role) => {
    if (role.toLowerCase() === 'manager') {
        return '<img src="assets/img/manager.png">';
    } else if (role.toLowerCase() === 'intern') {
        return '<img src="assets/img/intern.png">';
    } else {
        return '<img src="assets/img/engineer.jpg">';
    }
};

const managerHtml = (office) => {
    return `Office number: ${office}`;
}

const engineerHtml = (github) => {
    return `Github: <a href="http://github.com/${github}">${github}</a>`;
}

const internHtml = (school) => {
    return `School: ${school}</a>`;
}

const aditionalHtml = (employee) => {
    if (employee.getRole().toLowerCase() === 'manager') {
        return managerHtml(employee.getOfficeNumber())
    } else if (employee.getRole().toLowerCase() === 'intern') {
        return internHtml(employee.getSchool());
    } else {
        return engineerHtml(employee.getGithub());
    }
}

const generateEmployeeCard = (employee) => {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getName()}<br>${getIcon(employee.getRole())}${employee.getRole()}</h5>
      <p class="card-text">email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
      <p class="card-text">${aditionalHtml(employee)}</p>
    </div>
  </div>`
};

const generateAllEmployeesCards = (team)  => {
    let html = generateEmployeeCard(team.manager);
    if (team.engineers) {
        team.engineers.forEach(engineer => html = html + generateEmployeeCard(engineer));
    }
    if (team.interns) {
        team.interns.forEach(intern =>html = html + generateEmployeeCard(intern));
    }
    return html;
};

module.exports = generateHtml = (team) => {
    return `<!DOCTYPE html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">My Team</div>
    </header>
    <main>
    ${generateAllEmployeesCards(team)}
    </main>
</body>
</html>`;
};