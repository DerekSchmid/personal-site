import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
})
export class SharedModule {}
