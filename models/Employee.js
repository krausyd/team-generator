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

    generateAdditionalHtml() {
        return '';
    }

    getIcon() {
        return '';
    }

    generateEmployeeCard() {
        return `<div class="card col-12 col-md-3 mb-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.getName()}<br><img src="${this.getIcon()}" width="10">${this.getRole()}</h5>
          <p class="card-text">email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></p>
          <p class="card-text">${this.generateAdditionalHtml()}</p>
        </div>
      </div>`
    }

}

module.exports = Employee;