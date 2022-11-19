import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
    this.router.navigate(["/verification-auto"]);
  }
}
