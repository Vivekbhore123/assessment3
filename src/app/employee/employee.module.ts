import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { SelectAgeValidator } from '../shared/directives/directive.ageValidate';
import { SelectPinValidator } from '../shared/directives/directive.pinValidate';
import { SelectValidator } from '../shared/directives/directive.validator';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { DialogElementsExampleDialog } from './edit/dialogelement/dialogelement';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    EmployeeComponent,
    ViewComponent,
    EditComponent,
    SelectAgeValidator,
    SelectPinValidator,
    SelectValidator,
    DialogElementsExampleDialog
    
    ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[EmployeeComponent]
})
export class EmployeeModule { }
