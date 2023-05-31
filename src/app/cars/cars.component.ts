import { Component, OnInit } from '@angular/core';

interface Car {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit{
cars: Car[] = [
    { make: 'BMW', model: '3 series', year: 2019 },
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Accord', year: 2018 }
  ];
  ngOnInit(): void {
    
  }
  isDataVisible = true;

  toggleData() {
    this.isDataVisible = !this.isDataVisible;
  }

}
