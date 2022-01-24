class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
    const studentsRegistering = this.students.filter((stuObj) => stuObj.email === student.email);

    if (studentsRegistering[0]) {
      console.log(`A student with an email of ${student.email} already exists.`);
      return this.students;
    }
    this.students.push(student);
    console.log(`Registering student with email of ${student.email} to the bootcamp Web Dev Fundamentals.`);
    return this.students;
  }
}

// Create a new Bootcamp
// const myBootcamp = new Bootcamp("Full Stack Web and Mobile Development", "Next Level!");

// Create a new Student
// const newStudent = new Student("Robert", "robsemail", "East Coast!!!!!");

// Try registering my new student
// myBootcamp.registerStudent(newStudent);

// It should console.log if the student is registered.
// If the student's email address exists in the array of objects,
// console.log an error message instead of registering the student
// So, if you: const newOtherStudent = new Student("Jimmy", "robsemail", "East Coast!!!!!");
// and, try to: myBootcamp.registerStudent(newOtherStudent);
// The student will not be registered and an error message will be logged to the console
