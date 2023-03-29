import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPlansRoutingModule } from './loan-plans-routing.module';
import { LoanPlansComponent } from './loan-plans.component';


@NgModule({
  declarations: [
    LoanPlansComponent
  ],
  imports: [
    CommonModule,
    LoanPlansRoutingModule
  ]
})
export class LoanPlansModule { }
