import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameInput: string = 'Please type your complete name';
  dateInput: string = '02/18/1988';
  amountInput: number = 0;
  mileInput: number = 0;
  onNameChange(value: string) {
    this.nameInput = value;
  }
  onDateChange(value: string) {
    this.dateInput = value;
  }
  onAmountChange(value: number) {
    this.amountInput = value;
  }
  onMileChange(value: number) {
    this.mileInput = value;
  }
}
