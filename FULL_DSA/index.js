// const studentDatabase = ['jordan', 'erick', 'john', 'michel'];

// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log('Found', studentName);
//     }
//   }
// };

// findStudent(studentDatabase, 'erickf');

const groceries = ['milk', 'bread', 'eggs', 'flour', 'choose', 'sugar'];

const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log('Found', item);
    }
  }
};

searchForItem('milk');
