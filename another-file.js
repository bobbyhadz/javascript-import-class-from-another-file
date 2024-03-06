// 👇️ named export
export class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  increaseSalary() {
    this.salary += 100;
  }
}

export const site = 'bobbyhadz.com';

export default function sum(a, b) {
  return a + b;
}
