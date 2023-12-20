const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []){
        super(name, salary, title, manager);
        this.manager = manager;
        this.employees = employees;
    }
    addEmployee(employee){
        if(employee instanceof Employee) this.employees.push(employee);
    }
    _totalSubSalary(){
        let sum = 0;
        for(const employee of this.employees){
            if(employee instanceof Manager) sum += employee.salary + employee._totalSubSalary();
            else sum += employee.salary;
        }
        return sum;
    }
    calculateBonus(multiplier){
        const totalSalary = this.salary + this._totalSubSalary();
        return totalSalary * multiplier;
    }
}

module.exports = Manager;