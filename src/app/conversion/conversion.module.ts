import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ConversionComponent } from './components/converstion.component';
import { ConversionRoutingModule } from './conversion-routing.module';

@NgModule({
  declarations: [ConversionComponent],
  imports: [ConversionRoutingModule, SharedModule],
  providers: [],
})
export class ConversionModule {}
