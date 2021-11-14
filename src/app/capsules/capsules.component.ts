import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {
capsules = [
  {img: 'assets/capsules/capsule1.png'},
  {img: 'assets/capsules/capsule2.png',name: 'RABIG-LS'},
  {img: 'assets/capsules/capsule3.png',name: 'ITCONA'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
