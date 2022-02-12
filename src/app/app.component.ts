import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameInput: string = '';
  dateInput: string = '';

  onNameChange(value: string) {
    this.nameInput = value;
  }
  onDateChange(value: string) {
    this.dateInput = value;
  }
}
