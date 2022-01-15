const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getIcon() {
        return 'assets/img/manager.png';
    }

    generateAdditionalHtml() {
        return `Office number: ${this.getOfficeNumber()}`;
    }

    static getQuestions() {
        const questions = super.getQuestions('Manager');
        questions.push({
            type: 'input',
            message: `What's the Manager's ofice number?`,
            name: 'officeNumber',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log(`Please enter the  Manager's ofice number!`);
                    return false;
                }
            }
        });
        return questions;
    }
}

module.exports = Manager;