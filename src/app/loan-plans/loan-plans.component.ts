import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.scss'],
})
export class LoanPlansComponent {
  loanTypes = ['Education', 'Commercial', 'Personal'];
}
