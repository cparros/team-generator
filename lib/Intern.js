const { CustomConsole } = require('@jest/console')
const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, email, id, school){
  super(name, email, id)
  this.school = school
  }

  getSchool() {
    return this.school
  }
  
  getRole() {
    return 'Intern'
  }
}

// const tim = new Intern('Tim', 'Tim@yahoo.com', 3145, 'University of Mount Olive')
// console.log(tim.getSchool())
// console.log(tim.getId())

module.exports = Intern
