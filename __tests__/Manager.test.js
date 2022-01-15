const Manager = require('../models/Manager');

test('creates an Manager object', () => {
    const manager = new Manager(1, 'karina', 'karina@krausyd.com', 1);

    expect(manager.getName()).toBe('karina');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('karina@krausyd.com');
    expect(manager.getOfficeNumber()).toBe(1);
    expect(manager.getRole()).toBe('Manager');
});

test('getIcon gets the right icon', () => {
    const manager = new Manager(1, 'karina', 'karina@krausyd.com', 1);
    
    expect(manager.getIcon()).toBe('assets/img/manager.png');
});

test('generateAdditionalHtml gets the right office number information', () => {
    const manager = new Manager(1, 'karina', 'karina@krausyd.com', 1);
    
    expect(manager.generateAdditionalHtml()).toBe('Office number: 1');
});

test('generateEmployeeCard gets the right Manager html information', () => {
    const manager = new Manager(1, 'karina', 'karina@krausyd.com', 1);
    
    expect(manager.generateEmployeeCard())
        .toBe(`<div class="card col-12 col-md-3 mb-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">karina<br><img src="assets/img/manager.png" width="10">Manager</h5>
          <p class="card-text">email: <a href="mailto:karina@krausyd.com">karina@krausyd.com</a></p>
          <p class="card-text">Office number: 1</p>
        </div>
      </div>`);
});