import { Component, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { WebcamImage, WebcamInitError, WebcamUtil } from "ngx-webcam";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { QrService } from "app/services/qr.service";
import Swal from "sweetalert2";
import { Token } from "app/models/token";
import { DatosQr } from "app/models/datosQr";
import { Item } from "app/models/item";
@Component({
  selector: "app-verification-auto",
  templateUrl: "./verification-auto.component.html",
  styleUrls: ["./verification-auto.component.scss"],
})
export class VerificationAutoComponent {
  constructor(private qrService: QrService,private modalService: NgbModal) {}
  title = "qr-reader";
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];
  token = new Token("", "");
  item = new Item("", "", "", "", 0, "", 0, "");
  dataQr = new DatosQr("", "", this.item);
  public mostrarWebcam = false;
  closeResult = '';

  
  open(content) {
    
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
        console.log(content);
				this.closeResult = `Closed with: ${result}`;
        
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  public toggleWebcam(): void {
    this.mostrarWebcam = !this.mostrarWebcam;
  }

  scanSuccessHandler(event: string) {
    console.log(event);
    this.results.unshift(this.obtenerToken(event));
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach((camera) => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        this.scannerEnabled = true;
      }
    });
  }

  obtenerToken(url) {
    var token = url.split("?");
    this.token.token = token[1];
    this.token.urlToken = url;
    var newToken = this.token.token.split("=");
    token = newToken[1] + "=";
    this.token.token = token;
    this.qrService.obtenerToken(this.token).subscribe(
      (res) => {
        if (res != null) {
          this.mostrarWebcam = false;
          this.dataQr = res;
          this.item = this.dataQr.item;
          Swal.fire({
            icon: "success",
            title: "Pasajero Encontrado Correctamente",
            showConfirmButton: true,
            timer: 2500,
          });
         //this.modalService.open(context);
        } else {
          Swal.fire({
            icon: "error",
            title: "QR Invalido! Por favor, ingrese un QR válido.",
            showConfirmButton: false,
            timer: 2500,
          });
          //EN ESTE PUNTO SE DEBE GUARDAR QUE SE ESCANEO UN QR FALSO O INVALIDO
        }
      },
      (error) => {
        Swal.fire({
          icon: "warning",
          title: "Error al Encontrar el pasajero, vuelva a intentar",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
    return token[1];
  }
}
