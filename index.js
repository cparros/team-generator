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
    message: 'Please enter your team members name',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Please enter your team members email',
    name: 'email'
  },

])