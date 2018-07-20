import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'conversion',
    loadChildren: './conversion/conversion.module#ConversionModule',
  },
  { path: '', redirectTo: 'conversion', pathMatch: 'full' },
  { path: '**', redirectTo: 'conversion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
