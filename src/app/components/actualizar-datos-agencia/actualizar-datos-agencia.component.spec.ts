import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosAgenciaComponent } from './actualizar-datos-agencia.component';

describe('ActualizarDatosAgenciaComponent', () => {
  let component: ActualizarDatosAgenciaComponent;
  let fixture: ComponentFixture<ActualizarDatosAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDatosAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
