import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanPlansComponent } from './loan-plans.component';

const routes: Routes = [{ path: '', component: LoanPlansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanPlansRoutingModule { }
