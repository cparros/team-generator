class Employee {
  constructor(name, email, id){
    this.name = name;
    this.email = email;
    this.id = id
  }
  getName() { 
    console.log(this.name)
    return this.name
  }

  getEmail() { 
    console.log(this.email)
    return this.email
  }

  getId() { 

    console.log(this.id)
    return this.id
  }

  getRole() { 
    return 'Employee'
  }
}

// const robert = new Employee('Robert', 'Robert@gmail.com', 123)
// // console.log(robert.getEmail());
// // console.log(robert.getId());
// // console.log(robert.getRole());





module.exports = Employee