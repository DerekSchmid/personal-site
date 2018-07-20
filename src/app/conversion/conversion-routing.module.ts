import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversionComponent } from './components/converstion.component';

const routes: Routes = [
  {
    path: '',
    component: ConversionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ConversionRoutingModule {}
