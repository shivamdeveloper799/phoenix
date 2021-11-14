import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syrup',
  templateUrl: './syrup.component.html',
  styleUrls: ['./syrup.component.css']
})
export class SyrupComponent implements OnInit {
  syrups = [
    {img: 'assets/syrups/syrup1.png',name: ''},
    {img: 'assets/syrups/syrup2.png',name: 'PHOECLAV'},
    {img: 'assets/syrups/syrup3.png',name: 'GASOLIX'},
    {img: 'assets/syrups/syrup4.png',name: 'PHOECLAV-FORTE'},
    {img: 'assets/syrups/syrup5.png',name: 'ZCORT'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
