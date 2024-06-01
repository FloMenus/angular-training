import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtCarsListComponent } from './bought-cars-list.component';

describe('BoughtCarsListComponent', () => {
  let component: BoughtCarsListComponent;
  let fixture: ComponentFixture<BoughtCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoughtCarsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoughtCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
