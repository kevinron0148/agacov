import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosEmpresaComponent } from './actualizar-datos-empresa.component';

describe('ActualizarDatosEmpresaComponent', () => {
  let component: ActualizarDatosEmpresaComponent;
  let fixture: ComponentFixture<ActualizarDatosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDatosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
