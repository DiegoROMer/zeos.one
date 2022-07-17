import { SecondContainerComponent } from './components/second-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SecondContainerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SecondContainerComponent,
  ],
})
export class SeconddContainerModule { }
