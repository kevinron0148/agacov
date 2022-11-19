import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private url = 'https://consultas2-api.carnetvacunacion.minsa.gob.pe/user/validate-qr'
  constructor(private http: HttpClient) {}

  obtenerToken(token:any): Observable<any> {
    return this.http.post(`${this.url}`, JSON.stringify(token),{headers: new HttpHeaders({"Content-Type": "application/json"})});
  }
}
