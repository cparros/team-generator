const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, email, id, officeNumber){
    super(name, email, id)
    this.officeNumber = officeNumber

    
  }  
  getOfficeNumber() {
    return this.officeNumber
  }

  getRole() {
    return 'Manager'
  }
}

const johnny = new Manager('Johnny', 'Johnny@umo.edu', 00001, 908)
console.log(johnny.getOfficeNumber())
console.log(johnny.getId())
console.log(johnny.getName())
module.exports = Manager