import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule, MatCheckbox, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
