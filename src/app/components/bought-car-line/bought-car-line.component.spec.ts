import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtCarLineComponent } from './bought-car-line.component';

describe('BoughtCarLineComponent', () => {
  let component: BoughtCarLineComponent;
  let fixture: ComponentFixture<BoughtCarLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoughtCarLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoughtCarLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
