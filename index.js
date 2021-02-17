const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

inquirer.prompt([
  {
    type: 'confirm',
    message: 'Would you like to create a team roster?',
    name: 'confirmation'
  },
  {
    type: 'input',
    message: 'Please enter your team manager\'s name.',
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
    name: 'id'
  },
  {
    type: 'confirm',
    message: 'Would you like to add an Engineer or Intern?',
    name: 'hiring'
  },
])