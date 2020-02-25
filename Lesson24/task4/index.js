students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "John", birthDate: "05/23/2010" },
  { name: "Ann", birthDate: "05/21/2010" }
];

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
  const studentsArr = students.slice('')

  const result = {}

  month.forEach(item => {
    result[item] = [];
  });
  studentsArr.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
  .map(item => {
    const monthsName = month[new Date(item.birthDate).getMonth()];
    result[monthsName].push(item.name);
  });
  Object.keys(result).filter(item => result[item].length > 0 ? true : delete result[item])
  return result
};
export { studentsBirthDays };