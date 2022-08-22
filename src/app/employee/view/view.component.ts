import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/empService/emp.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EmployeeService]
})
export class ViewComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private empservice: EmployeeService) { }
  empCode: string = "";
  tempObj: any = {}


  ngOnInit(): void {

    this.empCode = this._route.snapshot.paramMap.get('empid')!;


    this.empservice.getEmpById(this.empCode).subscribe((item) => {
      console.log(item);
      this.tempObj = item;
    });

  }

}
