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
  console.log(`Here are your Manager\'s results:`)
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
    console.log(`Here are your Intern\'s results:` + response)
    })
  })

})
