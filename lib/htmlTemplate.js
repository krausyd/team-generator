const generateAllEmployeesCards = (team)  => {
    let html = team.manager.generateEmployeeCard();
    if (team.engineers) {
        team.engineers.forEach(engineer => html = html + engineer.generateEmployeeCard());
    }
    if (team.interns) {
        team.interns.forEach(intern =>html = html + intern.generateEmployeeCard());
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
    <title>Team</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
    </header>
    <main class="flex-row justify-space-between">
    ${generateAllEmployeesCards(team)}
    </main>
      icons by:
      <ul>
      <li><a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a></li>
      <li><a href="https://www.flaticon.com/free-icons/engineer" title="engineer icons">Engineer icons created by Freepik - Flaticon</a></li>
      <li><a href="https://www.flaticon.com/free-icons/intern" title="intern icons">Intern icons created by Freepik - Flaticon</a></li>
    </footer>
</body>
</html>`;
};