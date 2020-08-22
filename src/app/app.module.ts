import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MatCardExampleComponent } from './mat-card-example/mat-card-example.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AwsEnablersComponent } from './aws-enablers/aws-enablers.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    MatCardExampleComponent,
    AwsEnablersComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
