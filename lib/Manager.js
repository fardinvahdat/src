const { Employee } = require("./Employee");

//subClass(Manager)
class Manager extends Employee {
  //properties
  officeNumber;
  email;

  //constructor
  constructor(name, id, officeNumber, email) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.officeNumber = officeNumber;
    this.email = email;
  }

  //methods
  getRole() {
    return "Manager";
  }
}
module.exports = { Manager };
