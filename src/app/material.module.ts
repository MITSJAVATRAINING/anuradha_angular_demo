import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatDialogModule } from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
  ],
  exports: [
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
