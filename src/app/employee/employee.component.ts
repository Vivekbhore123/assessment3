import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from "../core/services/empService/emp.service"

import {EmpData} from "../core/models/users.model"

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees:EmpData[]= [];

  constructor(private _empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this._empService.getEmployeeByApi().subscribe((empdata)=>{
      console.log(empdata) 
      this.employees= empdata;
  })

  }
  displayedColumns: string[] = ['code','fname','mname','lname','email','contact','btns'];

  

  
  edit(element:any)
  {
    // console.log(element)
    this.router.navigate(["editemp",{code:element.code}]);
  }

  //for edit
  findRowFromService(id:any)
   {
    let temp={}
    this.employees.map(item=>{
      if(item.code==id)
      {
        temp = item;
      }
      return item
    })
    return temp;
    console.log("row printing")
   }



  

}
