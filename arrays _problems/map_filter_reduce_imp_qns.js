let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Neha", rollNumber: 45, marks: 90 },
    { name: "Soni", rollNumber: 8, marks: 26 },
    { name: "Rani", rollNumber: 2, marks: 78 },
    { name: "Rani", rollNumber: 24, marks: 30 },
  ];
  
  // * Qns1. Return only name of students in capital case
  let names = students.map((el, i) => el.name.toUpperCase());
  // console.log(names);
  
  //* Qns2. Return only details of those who scored more than 60
  
  let moreThan60Marks = students
    .filter((st) => st.marks > 60)
    .map((st) => st.marks);
  
  // console.log(moreThan60Marks);
  
  let details = students.filter((st) => st.marks > 60);
  
  // console.log(details);
  
  //* Qns3. More than 60 marks and rollNumber grater than 15
  
  let st = students.filter((s) => s.marks > 60 && s.rollNumber > 15);
  // console.log(st);
  
  //* Qns4. Sum of marks of all students
  
  let sumOfMarks = students.reduce((acc, curr, i, arr) => acc + curr.marks, 0);
  // console.log(sumOfMarks);
  
  //* Qns5. Return only names of students who scored more than 60
  
  let nameOfStudentsWhoScoredMoredThan60 = students
    .filter((st, i) => st.marks > 60)
    .map((st) => st.name);
  
  console.log(nameOfStudentsWhoScoredMoredThan60);
  
  //* Qns. Return total marks for students with marks grater than 60 after 20 marks have been added to those who scored less than 60
  
  let totalMarks = students.map((st) => {
    if (st.marks < 60) {
      st.marks += 20;
    }
    return st;
  }).filter((st) => st.marks > 60).reduce((acc, curr) => acc + curr.marks, 0)
  
  console.log(totalMarks);
  