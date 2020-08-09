import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
