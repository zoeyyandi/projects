//array
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(a, b) {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  if (nameA < nameB) {
    return -1
  } if (nameA > nameB) {
    return 1;
  } if (nameA === nameB) {
    var age1 = a.age
    var age2 = b.age
    if (age1 < age2) {
      return 1
    } else if (age1 > age2) {
      return -1
    } else {
      return 0
    }
  }
});

console.log(students)