import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MatCardExampleComponent } from './mat-card-example/mat-card-example.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    MatCardExampleComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
