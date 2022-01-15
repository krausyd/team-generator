const Intern = require('../models/Intern');

test('creates an Intern object', () => {
    const intern = new Intern(1, 'karina', 'karina@krausyd.com', 'UW');

    expect(intern.getName()).toBe('karina');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('karina@krausyd.com');
    expect(intern.getSchool()).toBe('UW');
    expect(intern.getRole()).toBe('Intern');
});

test('getIcon gets the right icon', () => {
    const intern = new Intern(1, 'karina', 'karina@krausyd.com', 'UW');
    
    expect(intern.getIcon()).toBe('assets/img/intern.png');
});

test('generateAdditionalHtml gets the right university information', () => {
    const intern = new Intern(1, 'karina', 'karina@krausyd.com', 'UW');
    
    expect(intern.generateAdditionalHtml()).toBe('School: UW');
});

test('generateEmployeeCard gets the right Intern html information', () => {
    const intern = new Intern(1, 'karina', 'karina@krausyd.com', 'UW');
    
    expect(intern.generateEmployeeCard())
        .toBe(`<div class="card col-12 col-md-3 mb-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">karina<br><img src="assets/img/intern.png" width="10">Intern</h5>
          <p class="card-text">email: <a href="mailto:karina@krausyd.com">karina@krausyd.com</a></p>
          <p class="card-text">School: UW</p>
        </div>
      </div>`);
});