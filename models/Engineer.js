const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }

    getIcon() {
        return 'assets/img/engineer.png';
    }
    
    generateAdditionalHtml() {
        return `Github: <a href="http://github.com/${this.getGithub()}">${this.getGithub()}</a>`;
    }

    static getQuestions() {
        const questions = super.getQuestions('Engineer');
        questions.push({
            type: 'input',
            message: `What's the Engineer's github?`,
            name: 'github',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`Please enter the Engineers github!`);
                    return false;
                }
            }
        });
        return questions;
    }
}

module.exports = Engineer;