import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { EmpData } from '../../models/users.model';

export class EmpDataService implements InMemoryDbService {

    constructor() {

    }

    createDb() {
        return {
            employees: [
                { code: 1, fname: "tom", mname: "mdtom", lname: "ljsjd", gender: "male", userType: "Contractual", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "v@gmail.com", contact: "8834588888" },
                { code: 2, fname: "ram", mname: "dom", lname: "ajax", gender: "female", userType: "Permenant", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "abc@gmail.com", contact: "8888812488" },
                { code: 2, fname: "ram", mname: "dom", lname: "ajax", gender: "female", userType: "Permenant", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "pqr@gmail.com", contact: "8789888888" },
                { code: 3, fname: "shyam", mname: "shell", lname: "jquery", gender: "female", userType: "Contractual", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "xyz@gmail.com", contact: "3344588888" },
                { code: 4, fname: "seeta", mname: "toor", lname: "json", gender: "male", userType: "Permenant", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "lmnopq@gmail.com", contact: "8881246888" },
                { code: 5, fname: "geeta", mname: "moore", lname: "xml", gender: "female", userType: "Contractual", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "asdg@gmail.com", contact: "5368888888" },
                { code: 6, fname: "dell", mname: "pqr", lname: "lambda", gender: "male", userType: "Contractual", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "kfbmkf@gmail.com", contact: "123458888" },
                { code: 7, fname: "bill", mname: "xyz", lname: "pixel", gender: "male", userType: "Contractual", salary: 2000, pin: 334421, address1: "mumbai", address2: "delhi", btns: "", age: 23, country: "India", state: "Maharashtra", city: "Mumbai", dob: "2022-08-24", email: "ldkm@gmail.com", contact: "7438927584" },
            ]
        };
    }

}



