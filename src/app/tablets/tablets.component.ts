import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  tablets = [
    {img: 'assets/Tablets/tablet1.png',name: 'ACEPA-S'},
    {img: 'assets/Tablets/tablet2.png',name: 'VALNIX-500XB'},
    {img: 'assets/Tablets/tablet3.png',name: 'KASTZINE'},
    {img: 'assets/Tablets/tablet4.png',name: 'DULONIX-30'},
    {img: 'assets/Tablets/tablet5.png',name: 'PHOEVOX-100 SR'},
    {img: 'assets/Tablets/tablet6.png',name: 'OLENIX-7.5'},
    {img: 'assets/Tablets/tablet7.png',name: 'FLUNIX-A'},
    {img: 'assets/Tablets/tablet8.png',name: 'ESTALONIX-10'},
    {img: 'assets/Tablets/tablet9.png',name: 'PHOECAL-M'},
    {img: 'assets/Tablets/tablet10.png',name: 'AZTH-250 DT'},
    {img: 'assets/Tablets/tablet11.png',name: 'ZCORT-6'},
    {img: 'assets/Tablets/tablet12.png',name: 'CLONIX-2'},
    {img: 'assets/Tablets/tablet13.png',name: 'NIXOPAN-40'},
    {img: 'assets/Tablets/tablet14.png',name: 'OFLID-O'},
    {img: 'assets/Tablets/tablet15.png',name: 'VALFAX-75 ER'},
    {img: 'assets/Tablets/tablet16.png',name: 'VALNIX-300 XR'},
    {img: 'assets/Tablets/tablet17.png',name: 'PHOEDOX-200'},
    {img: 'assets/Tablets/tablet18.png',name: 'NIXOPAN-D'},
    {img: 'assets/Tablets/tablet19.png',name: 'PHOECLAV-625'},
    {img: 'assets/Tablets/tablet20.png',name: 'CLARINIX-250'},
    {img: 'assets/Tablets/tablet21.png',name: 'SINIXO'},
    {img: 'assets/Tablets/tablet22.png',name: 'ITONIX-50'},
    {img: 'assets/Tablets/tablet23.png',name: 'NIXOTAM-800'},
    {img: 'assets/Tablets/tablet24.png',name: 'CLONIX-0.5'},
    {img: 'assets/Tablets/tablet25.png',name: 'OLONIX-10'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
