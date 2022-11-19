import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationAutoComponent } from './verification-auto.component';

describe('VerificationAutoComponent', () => {
  let component: VerificationAutoComponent;
  let fixture: ComponentFixture<VerificationAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
