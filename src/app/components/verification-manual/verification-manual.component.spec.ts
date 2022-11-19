import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationManualComponent } from './verification-manual.component';

describe('VerificationManualComponent', () => {
  let component: VerificationManualComponent;
  let fixture: ComponentFixture<VerificationManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
