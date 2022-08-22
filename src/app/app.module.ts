import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarComponent } from './navbar/navbar.component';




import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeModule } from './employee/employee.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpDataService } from './core/services/empService/empData.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    NgbModule,
    NavbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    EmployeeModule,
    MatTableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EmpDataService)
    
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
