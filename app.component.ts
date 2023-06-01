import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedOption: string;

  constructor() {
    this.selectedOption = 'option2'; // Initialize selectedOption in the constructor
  }
}
