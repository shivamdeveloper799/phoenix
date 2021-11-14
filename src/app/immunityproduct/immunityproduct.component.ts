import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunityproduct',
  templateUrl: './immunityproduct.component.html',
  styleUrls: ['./immunityproduct.component.css']
})
export class ImmunityproductComponent implements OnInit {
  powders = [
    {img: 'assets/powders/powder1.jpg',name: 'LYCONIXO'},
    {img: 'assets/powders/powder2.jpg',name: 'CHS (Chocolate flavour)'},
    {img: 'assets/powders/powder3.jpg',name: 'CHS (Vanilla flavour)'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
