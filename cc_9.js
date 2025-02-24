// Task 1 - Creating an Employee Class

//Creating a class constructor that allows employees to be created when given a name, employee ID, department, and salary.
class Employee {
    constructor (name, id, department, salary) {
        this.name = name //Store name in the instance.
        this.id = id //Sotre ID in the instance.
        this.department = department //Store department in the instnace.
        this.salary = salary //Store salary in the instance.
    };

    //Writing a function that returns a string of an employee's detials.
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}.` //Uses a template literal to reutrn the details.
    };

    //Writing a function that calculates an employee's yearly salary by taking the salary from their details.
    calculateAnnualSalary(){
        let annualSalary = this.salary * 12 //Multiplies the monthy salary by 12 to represent the entire year.
        return `Annual Salary: $${annualSalary}` //Uses a template literal to return the total annual salary.
    };

    

};

//Creating a new employee using the class constructor.
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

//Console logging the getDetials function using the new employee we created.
console.log(emp1.getDetails()); //Expected Output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000."

//Console logging the calculateAnnualSalary function using the new employee we created.
console.log(emp1.calculateAnnualSalary()) //Expected Output: "Salary: $60000"
