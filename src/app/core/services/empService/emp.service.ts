import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, ReplaySubject,catchError,throwError } from 'rxjs';
import { EmpData } from '../../models/users.model'

@Injectable()
export class EmployeeService {


    employeesArray: EmpData[] = [];

    employeeURL: string = 'api/employees';
    constructor(private _http: HttpClient) {

    }
   
    getEmployeeByApi(): Observable<EmpData[]> {
        // console.log(this._http.get<EmpData[]>(this.employeeURL));
        return this._http.get<EmpData[]>(this.employeeURL);
    }

    returnEmployeeArray() {
        this.getEmployeeByApi().subscribe((empdata) => {
            console.log(empdata)
            this.employeesArray = empdata;
        })
        return this.employeesArray;
    }

   

    getName(name: string): string {
        return "Mr. " + name;
    }
   


    temp: any = {}
    //for edit 

    getEmpById(id: any) {
        let subject = new ReplaySubject();
        this._http.get<EmpData[]>(this.employeeURL).subscribe((data) => {
            data.map(item => {
                    if (item.code == id) {
                        console.log(item);
                        this.temp = item;
                    }
    
                })
                subject.next(this.temp);
            subject.complete();
        });
        return subject
    }

    findRowFromService(id: any) {

        this.getEmployeeByApi().subscribe((empdata) => {

            return empdata

            

        })
       
    }

}