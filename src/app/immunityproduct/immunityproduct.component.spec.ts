import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunityproductComponent } from './immunityproduct.component';

describe('ImmunityproductComponent', () => {
  let component: ImmunityproductComponent;
  let fixture: ComponentFixture<ImmunityproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunityproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunityproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
