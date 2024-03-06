// 👇️ named import
import sum, {Employee, site} from './another-file.js';

const employee = new Employee('Alice', 100);

console.log(employee.name); // 👉️ 'Alice'
console.log(employee.salary); // 👉️ 100

employee.increaseSalary();

console.log(employee.salary); // 👉️ 200

console.log(site);

console.log(sum(123, 123));
