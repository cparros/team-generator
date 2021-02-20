const fs = require('fs');
const inquirer = require('inquirer');

let finalEmployeeList = []
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const engineerCard = require('./src/newEngineer')
const managerCard = require('./src/newManager')
const internCard = require('./src/newIntern')


inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Would you like to add to your team of employees?',
    name: 'employees',
    prompts: [
  {
        type: 'checkbox',
        name: 'role',
        Message: 'Please select your employee\'s role.',
        choices: ['Engineer', 'Intern', 'Manager']
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s first and last name.',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s email.',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s ID number.',
    name: 'id'
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s office number.(If NOT a manager PRESS ENTER to skip).',
    name: 'office'
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s Github Username.(If NOT an engineer PRESS ENTER to skip).',
    name: 'github' 
  },
  {
    type: 'input',
    message: 'Please enter your employee\'s school.(If NOT an Intern press PRESS to skip).',
    name: 'school'
  },
  
  ]}
])
.then(function(response) {
 
    let employees = response.employees
  employees.forEach(employee => {
    
    if(employee.role[0] === 'Intern'){
      employee = new Intern(employee.name, employee.email, employee.id, employee.school)
      finalEmployeeList.push(employee)
    } else if(employee.role[0] === 'Engineer'){
      employee = new Engineer(employee.name, employee.email, employee.id, employee.github)
      finalEmployeeList.push(employee)
    } else if(employee.role[0] === 'Manager'){
      employee = new Manager(employee.name, employee.email, employee.id, employee.office)
      finalEmployeeList.push(employee)
    }
  })
 }).then(response => {
    let workerList = finalEmployeeList
    console.log('workerList')
    console.log(workerList)
   

      let addCards = function (arr) {


       return arr.map(element => {
          if(element.getRole() === 'Manager'){
            return managerCard(element)
          }
          if(element.getRole() === 'Engineer'){
            return engineerCard(element)
          }
          if(element.getRole() === 'Intern'){
            return internCard(element)
          }
        })
      } 

      addCards(workerList)
    


     
      

    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <title>Your New Team</title></title>
      <script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous"></script>
      </head>
      <body style="background-color: darkgrey;">
      <header class="jumbotron bg-dark" style="text-align: center; font-size: 34px; color: antiquewhite; font-weight: bolder; border-bottom: antiquewhite solid 5px;">Your New Team</header>
    
      <div class="container-fluid">
      <div class="row">
      <div class="col-md-12" id="cards">
      
      ${addCards(workerList)}

      </div>
      </div>   
      </div>   

      <script type="module" src="index.js"></script>
      </body>
      </html>
    `
  
    fs.writeFile('team.html', html, (err) => 
    err ? console.error(err) : console.log('Success!'))

  })


  

