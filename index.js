const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



inquirer.prompt([
  {
    type: 'confirm',
    message: 'Would you like to create a team roster?',
    name: 'confirmation'
  },
  {
    type: 'input',
    message: 'Please enter your team manager\'s first and last name.',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Please enter your manager\'s email.',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Please enter your manager\'s ID number.',
    name: 'id'
  },
  {
    type: 'input',
    message: 'Please enter your manager\'s office number.',
    name: 'office'
  },
  {
    type: 'confirm',
    message: 'Would you like to add an Engineer or Intern?',
    name: 'addition'
  },
]).then(response => {
  let newManager = response.name
  newManager = new Manager(response.name, response.email, response.id, response.officeNumber)

  console.log('Here are your Manager results:')
  console.log(response)
  inquirer.prompt([
  {
    type: 'checkbox',
    name: 'employee',
    Message: 'Who would you like to add?',
    choices: ['Engineer', 'Intern']
  },
]).then(response => {

  console.log(`Here are your next employee\'s results:`)
  console.log(response)

  if(response.employee[0] === 'Engineer'){
    inquirer.prompt([
      {
        type: 'input',
        message: 'Please enter your team Engineer\'s first and last name.',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Please enter your Engineer\'s email.',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Please enter your Engineer\'s ID number.',
        name: 'id'
      },
      {
        type: 'input',
        message: 'What Engineer\'s Github Username?',
        name: 'github'
      }
    ]).then(response => {
      let newEngineer = response.name
      newEngineer = new Engineer(response.name,  response.id, response.email, response.github )
      console.log(`Here are your Engineer\'s results:`)
      console.log(response)
    })
  } else if(response.employee[0] === 'Intern')
  inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter your intern\'s first and last name.',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Please enter your intern\'s email.',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Please enter your intern\'s ID number.',
    name: 'id'
  },
  {
    type: 'input',
    message: 'What school does your intern attend?',
    name: 'school'
  }
    ]).then(response => {
    let newIntern = response.name
    newIntern = new Intern(response.name, response.id, response.email, response.school)
    console.log(`Here are your Intern\'s results:` + response)
    })
  })

}).then(response => {
  
  const html = 
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Your New Team</title></title>
  </head>
  <body style="background-color: darkgrey;">
    <header class="jumbotron bg-dark" style="text-align: center; font-size: 34px; color: antiquewhite; font-weight: bolder; border-bottom: antiquewhite solid 5px;">Your New Team</header>
  </body>
  </html>
  `

  fs.writeFile('team.html', html, (err) => 
err ? console.error(err) : console.log('Success!'))
})
