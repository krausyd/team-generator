const inquirer = require('inquirer');
const Manager = require('./models/Manager');
const Engineer = require('./models/Engineer');
const Intern = require('./models/Intern');
const generateHtml = require('./lib/htmlTemplate');
const fs = require('fs');

let team = {};

const done = () => {
    fs.writeFileSync('./dist/index.html', generateHtml(team), err => {
        //if there is an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }

        //if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        })
    });
    fs.copyFileSync('./icons/engineer.jpg', './dist/assets/img/engineer.jpg');
    fs.copyFileSync('./icons/manager.png', './dist/assets/img/manager.png');
    fs.copyFileSync('./icons/intern.png', './dist/assets/img/intern.png');
}

const promptIntern = () => {
    inquirer.prompt(Intern.getQuestions())
    .then(data => {
        if (!team.interns) {
            team.interns = [];
        }
        team.interns.push(new Intern(data.id, data.name, data.email, data.school));
        moreEmployees();
    });
}

const promptEngineer = () => {
    inquirer.prompt(Engineer.getQuestions())
    .then(data => {
        if (!team.engineers) {
            team.engineers = [];
        }
        team.engineers.push(new Engineer(data.id, data.name, data.email, data.github));
        moreEmployees();
    });
};

const moreEmployees = () => {
    inquirer.prompt({
        type: 'list',
        message: `Do you want to add a new Employee?`,
        name: 'more',
        choices: ['Engineer', 'Intern', 'I am done!']
    }).then(data => {
        if (data.more === 'I am done!') {
            done();
        } else if (data.more === 'Engineer') {
            promptEngineer();
        } else {
            promptIntern();
        }
    })
};

inquirer.prompt(Manager.getQuestions())
.then(data => {
    team.manager = new Manager(data.id, data.name, data.email, data.officeNumber);
    moreEmployees();
});