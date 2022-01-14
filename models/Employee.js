class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return 'WTF';
    }

    static getQuestions(type) {
        return [
            {
                type: 'input',
                message: `What's the ${type} id?`,
                name: 'id',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log(`Please enter the ${type} id!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: `What's the ${type} name?`,
                name: 'name',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log(`Please enter the ${type} name!`);
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: `What's the ${type} email?`,
                name: 'email',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log(`Please enter the ${type} email!`);
                        return false;
                    }
                }
            },
        ];
    }

}

module.exports = Employee;