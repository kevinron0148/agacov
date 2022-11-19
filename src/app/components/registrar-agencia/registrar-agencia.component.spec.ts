import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAgenciaComponent } from './registrar-agencia.component';

describe('RegistrarAgenciaComponent', () => {
  let component: RegistrarAgenciaComponent;
  let fixture: ComponentFixture<RegistrarAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
