const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }

    getIcon() {
        return 'assets/img/intern.png';
    }
    
    generateAdditionalHtml() {
        return `School: ${this.getSchool()}</a>`;
    }

    static getQuestions() {
        const questions = super.getQuestions('Intern');
        questions.push({
            type: 'input',
            message: `What's the Interns's school?`,
            name: 'school',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`Please enter the Interns's school!`);
                    return false;
                }
            }
        });
        return questions;
    }
}

module.exports = Intern;