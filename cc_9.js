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
        return annualSalary
    };

    

};

//Creating a new employee using the class constructor.
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

//Console logging the getDetials function using the new employee we created.
console.log(emp1.getDetails()); //Expected Output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000."

//Console logging the calculateAnnualSalary function using the new employee we created.
console.log(emp1.calculateAnnualSalary()) //60000

//Task 2 - Creating a Manager Class (Inheritance and Method Overriding)

//Creating a class constructor using inheritance thatextends the previous class employee.
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary) //Recalls the detials from Employee.
        this.teamSize = teamSize //Sotres teamSize in the instance.
    }

    //Overriding the previous getDetails function to allow for team size to be added to the details recalled for the Manager role.
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}.` //Uses a template literal to reutrn the details. 
    }

    //Writing a function that calulates a 10% bonus of a maanagers annual salary.
    calculateBonus() {
        let bonus = (this.salary *12) * 0.10 //Multiplying the managers annual salary by 0.1 to get 10% of their salary.
        return bonus
    }
}

//Creating a new maanager with the manager constructor.
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5)

//Console logging getDetails using the new manager we created.
console.log(mgr1.getDetails()) //Expected Output: "Manager: John Smith, ID: 201, Department: IT, Salary, :  $8000, Team Size: 5."

//Console logging calulateBonus using the new manager we created.
console.log(mgr1.calculateBonus()) //9600

//Task 3 - Creating a Company Class

//Creating a class constructor that names a company and includes an empty array for employees.
class Company {
    constructor (name) {
        this.name = name //Storing name in the instance.
        this.employees = [] //Making the empty arrayfor employees.
    }

    //Creating a method that allows previously created employees to be added to the comapny's employee array.
    addEmployee(employee) {
        this.employees.push(employee)
    }

    //Creating a method that lists the current employees in the array and returns their detials using the previously created getDetails.
    listEmployees() {
        return this.employees.forEach(emp => console.log(emp.getDetails()))
    }
    
    //Part of Task 4 - creating a function that adds up the total payroll for all employees.
    calculatePayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0)
    }

    //Part of Task 5 - creating a function that can promote someone to manager.
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee) ///Seeing if the employee exists.
        if (index !== -1) {
            this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize)
        } //If the employee does exist, the function replaces the employee instance with an instance of a manager, but with the same details.
        
        
    }
}

//Creating a new company called TechCorp using the constructor.
const company = new Company("TechCorp")

//Adding the previously created employee using addEmployee.
company.addEmployee(emp1)

//Adding the previously created manager using addEmployee.
company.addEmployee(mgr1)

//Logging the newly inserted employee's detials using list employee.
company.listEmployees()

//Task 4 - Implementing a Payroll System

//Logging the calulate payroll function.
console.log(company.calculatePayroll())

//Task 5 - Implementing Promotions

//Promoting the first employee to a manager and adding a team size of 3.
company.promoteToManager(emp1, 3)

//Logging the promotion.
company.listEmployees()