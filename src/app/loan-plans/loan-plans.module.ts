import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPlansRoutingModule } from './loan-plans-routing.module';
import { LoanPlansComponent } from './loan-plans.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [LoanPlansComponent],
  imports: [CommonModule, LoanPlansRoutingModule, MatListModule],
})
export class LoanPlansModule {}
