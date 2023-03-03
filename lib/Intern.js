const { Employee } = require("./Employee");

//subClass(Intern)
class Intern extends Employee {
  //properties
  school;

  //constructor
  constructor(school, name, id, email) {
    super(name, id, email);
    this.email = email;
    this.name = name;
    this.id = id;
    this.school = school;
  }

  //methods
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = { Intern };
