import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
sliders = [
  {images: 'assets/slider9.png'},
  {images: 'assets/slider3.png'},
  {images: 'assets/slider4.jpg'},
  {images: 'assets/slider8.png'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
