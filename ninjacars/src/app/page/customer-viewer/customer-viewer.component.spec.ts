import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewerComponent } from './customer-viewer.component';

describe('CustomerViewerComponent', () => {
  let component: CustomerViewerComponent;
  let fixture: ComponentFixture<CustomerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
