import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  settings = [
    'Emails whensomeone applies for loan',
    'Emailme whenver encounter unusual activity',
    'Notify me by email about sales and latest news',
    'Email me about new features and updates',
    'Email me about tips on using account',
  ];
}
