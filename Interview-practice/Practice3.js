//map filter and reduce - Output based questions

let students = [
  { name: "Srijan Kumar Khan", rollNumber: 31, marks: 80 },
  { name: "Kankana Das", rollNumber: 15, marks: 69 },
  { name: "Sk Sujauddin", rollNumber: 16, marks: 35 },
  { name: "Nimesh Krishnan", rollNumber: 7, marks: 55 },
];

//Question 1 : Return only the name of students in capital
//Approach 1
let names = [];
for (let index = 0; index < students.length; index++) {
  names.push(students[index].name.toUpperCase());
}
console.log(names);

//Approach 2 using map
const nameArray = students.map((student) => student.name.toUpperCase());
console.log(nameArray);

//Question 2 : Return only details of those students who scored more than 60 marks
const marksArray = students.filter((student) => student.marks > 60);
console.log(marksArray);

//Question 3 : more than 60 marks and rollnumber is greater than 15
const rollNumberAndMarksArray = students.filter(
  (student) => student.marks > 60 && student.rollNumber > 15
);
console.log(rollNumberAndMarksArray);

//Question 4:Sum of marks of all students
const sumMarksArray = students.reduce((accu, crr) => accu + crr.marks, 0);
console.log(sumMarksArray);

//Question 5: Return only names of students who scored more than 60
const studentsArray = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);
console.log(studentsArray);

//Question 6: Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const totalMarks = students
  .map((student) => {
    if (student.marks < 60) {
      student.marks += 20;
    }
    return student;
  })
  .filter((students) => students.marks > 60)
  .reduce((accu, studentMarks) => accu + studentMarks.marks, 0);
console.log(totalMarks);
