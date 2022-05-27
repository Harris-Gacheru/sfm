import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentswithoutbalanceComponent } from './studentswithoutbalance.component';

describe('StudentswithoutbalanceComponent', () => {
  let component: StudentswithoutbalanceComponent;
  let fixture: ComponentFixture<StudentswithoutbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentswithoutbalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentswithoutbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
