import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-agencia',
  templateUrl: './registrar-agencia.component.html',
  styleUrls: ['./registrar-agencia.component.scss']
})
export class RegistrarAgenciaComponent implements OnInit {
  public admin = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  registrarEmpresa() {
    Swal.fire({
      icon: 'success',
      title: 'Registrado correctamente',
      showConfirmButton: false,
      timer: 2500,
    })
    this.router.navigate(["/"]);
  }

  buscarPasajero() {
    Swal.fire({
      icon: 'success',
      title: 'Ingreso Correcto',
      showConfirmButton: false,
      timer: 2500,
    })
    this.router.navigate(["/dashboard"]);
  }

  activarFormAdmin(){
    this.admin = true;
  }

}
