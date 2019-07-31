// CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   age: 37,
//   location: 'Bedrock',
//   specialty: 'Front-end',
//   favLanguage: 'JavaScript',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person
class Person {
    // * First we need a Person class. This will be our `base-class`
    constructor(PersonAttributes) {
        // * Person receives `name` `age` `location` all as props
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;
    }
    // * Person receives `speak` as a method.
    speak() {
        // * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}
// #### Instructor
class Instructor extends Person {
    constructor(InstructorAttributes) {
        super(InstructorAttributes);
        //   * `specialty` what the Instructor is good at i.e. 'redux'
        this.specialty = InstructorAttributes.specialty;
        //   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
        this.favLanguage = InstructorAttributes.favLanguage;
        //   * `catchPhrase` i.e. `Don't forget the homies`
        this.catchPhrase = InstructorAttributes.catchPhrase;
    }
    //   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }
    //   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
    // * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.

}

// #### Student
class Student extends Person {
    constructor(StudentAttributes) {
        super(StudentAttributes);
        //   * `previousBackground` i.e. what the Student used to do before Lambda School
        this.previousBackground = StudentAttributes.previousBackground;
        //   * `className` i.e. CS132
        this.className = StudentAttributes.className;
        //   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
        this.favSubjects = StudentAttributes.favSubjects;
        // * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
        this.grade = StudentAttributes.grade;
    }
    //   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    listsSubjects() {
        this.favSubjects.forEach(subject => {console.log(subject)});
    }
    //   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    //   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
}

// #### Project Manager
class ProjectManager extends Instructor {
    constructor(ProjectManagerAttributes) {
        super(ProjectManagerAttributes);
        //   * `gradClassName`: i.e. CS1
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        //   * `favInstructor`: i.e. Sean
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    //   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);
    }
    //   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


const abdiel = new Student({
    name: 'Abdiel Fernandez',
    age: 22,
    location: 'East Coast',
    previousBackground: 'Java',
    className: 'CSPT2',
    favSubjects: ['Batman', 'Superman', 'Flash'],
    grade: 80,
})

const eric = new Student({
    name: 'Eric Whitcomb',
    age: 33,
    location: 'Mountain Time',
    previousBackground: 'unknown',
    className: 'CSPT2',
    favSubjects: ['Helping others', 'Petting Dogs', 'Growing a Great Beard'],
    grade: 90,
})

const brendon = new Student({
    name: 'Brendon Kutz',
    age: 25,
    location: 'Central Time',
    previousBackground: 'unknown',
    className: 'CSPT2',
    favSubjects: ['group', 'of', 'arrays'],
    grade: 55,
})

const chris = new ProjectManager({
    name: 'Chris Atoki',
    age: 27,
    location: 'East Coast',
    specialty: 'helping newbies',
    favLanguage: 'JS',
    catchPhrase: 'Please put your favorite emoji on this message.',
    gradClassName: 'CS3',
    favInstructor: 'Dan',
})

const moises = new ProjectManager({
    name: 'Moises Dobarganes',
    age: 25,
    location: 'East Coast',
    specialty: 'Getting hired by Google',
    favLanguage: 'JS',
    catchPhrase: 'Do a little dance',
    gradClassName: 'unknown',
    favInstructor: 'Dan',
})

const dan = new Instructor({
    name: 'Dan Frehner',
    age: 30,
    location: 'West Coast',
    specialty: 'Growing a great beard',
    favLanguage: 'JS',
    catchPhrase: 'It is turtle time',
})

console.log(abdiel);
console.log(eric);
console.log(dan);
console.log(chris);
abdiel.listsSubjects();
dan.grade(abdiel, 'Javascript');
chris.demo('JavaScript');
moises.debugsCode(eric, 'Potato.pancake');
brendon.speak();
abdiel.PRAssignment('javascript');
eric.sprintChallenge('JS IV');
chris.standUp('Number 1');
// eric.graduate();
// dan.changeGrade(brendon);
// chris.changeGrade(brendon);