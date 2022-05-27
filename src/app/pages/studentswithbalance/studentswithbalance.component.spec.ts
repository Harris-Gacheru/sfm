import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentswithbalanceComponent } from './studentswithbalance.component';

describe('StudentswithbalanceComponent', () => {
  let component: StudentswithbalanceComponent;
  let fixture: ComponentFixture<StudentswithbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentswithbalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentswithbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
