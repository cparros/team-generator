const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, email, id, github){
  super(name, email, id)
  this.github = github
  }

  getGithub()  {
    return this.github
  }

  getRole () {
    return 'Engineer'
  }
}

const sean = new Engineer('San', 'sean@aol.com', 123, 'seansgithub')
console.log(sean.getGithub())
console.log(sean.getEmail())

module.exports = Engineer