import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';

import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './employee/view/view.component';

 
const routes: Routes = [
  {path:"emplist",component:EmployeeComponent},
  {path:"viewemp/:empid",component:ViewComponent}, // required param
  {path:"editemp",component:EditComponent},  //optional param
  {path:"",redirectTo:"emplist",pathMatch:'full'},
  {path:"**",component:EmployeeComponent},
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
