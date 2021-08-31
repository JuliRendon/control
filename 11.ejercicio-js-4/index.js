// Ejemplo
const names = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];

const uniqueNames = names.filter((name, i) => {
  return names.indexOf(name) === i;
});

console.log(uniqueNames);
