import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {
  injection = [
    {img: 'assets/injections/injection1.png',name: 'ANASTER-50'},
    {img: 'assets/injections/injection2.png',name: 'NIXOPAN-40'},
    {img: 'assets/injections/injection3.png',name: 'SULNIX (1.5gm)'},
    {img: 'assets/injections/injection4.png',name: 'AMIKANIX-500'},
    {img: 'assets/injections/injection5.png',name: 'IDOZID'},
    {img: 'assets/injections/injection6.png',name: 'NIXOCEF-5'},
    {img: 'assets/injections/injection7.png',name: 'NIXOCEF-T'},
    {img: 'assets/injections/injection8.png',name: 'PIPTAM (1.5 gm)'},
    {img: 'assets/injections/injection9.png',name: 'SULNIX'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
