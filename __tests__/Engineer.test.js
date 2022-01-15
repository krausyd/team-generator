const Engineer = require('../models/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer(1, 'karina', 'karina@krausyd.com', 'krausyd');

    expect(engineer.getName()).toBe('karina');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('karina@krausyd.com');
    expect(engineer.getGithub()).toBe('krausyd');
    expect(engineer.getRole()).toBe('Engineer');
});

test('getIcon gets the right icon', () => {
    const engineer = new Engineer(1, 'karina', 'karina@krausyd.com', 'krausyd');
    
    expect(engineer.getIcon()).toBe('assets/img/engineer.png');
});

test('generateAdditionalHtml gets the right github information', () => {
    const engineer = new Engineer(1, 'karina', 'karina@krausyd.com', 'krausyd');
    
    expect(engineer.generateAdditionalHtml()).toBe('Github: <a href="http://github.com/krausyd">krausyd</a>');
});

test('generateEmployeeCard gets the right Engineer html information', () => {
    const engineer = new Engineer(1, 'karina', 'karina@krausyd.com', 'krausyd');
    
    expect(engineer.generateEmployeeCard())
        .toBe(`<div class="card col-12 col-md-3 mb-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">karina<br><img src="assets/img/engineer.png" width="10">Engineer</h5>
          <p class="card-text">email: <a href="mailto:karina@krausyd.com">karina@krausyd.com</a></p>
          <p class="card-text">Github: <a href="http://github.com/krausyd">krausyd</a></p>
        </div>
      </div>`);
});