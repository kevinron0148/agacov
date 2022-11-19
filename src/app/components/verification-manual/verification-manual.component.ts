import { Component, OnInit } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DatosQr } from "app/models/datosQr";
import { Item } from "app/models/item";
import { Pregunta } from "app/models/pregunta";
import { Token } from "app/models/token";
import { QrService } from "app/services/qr.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-verification-manual",
  templateUrl: "./verification-manual.component.html",
  styleUrls: ["./verification-manual.component.scss"],
})
export class VerificationManualComponent {
  constructor(private qrService: QrService, private modalService: NgbModal) {}
  title = "qr-reader";
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];
  token = new Token("", "");
  item = new Item("", "", "", "", 0, "", 0, "");
  dataQr = new DatosQr("", "", this.item);
  public mostrarWebcam = false;
  closeResult = "";
  pregunta1 = new Pregunta("", "", "", "", "",true, false, false);
  pregunta2 = new Pregunta("", "", "", "", "",false, false, false);
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          //console.log(content);
          this.closeResult = `Closed with: ${result}`;
          this.item = new Item("", "", "", "", 0, "", 0, "");
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.item = new Item("", "", "", "", 0, "", 0, "");
      return "Cancelado";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.item = new Item("", "", "", "", 0, "", 0, "");
      return "Cancelado";
    } else {
      this.item = new Item("", "", "", "", 0, "", 0, "");
      return "Cancelado";
      //return `with: ${reason}`;
    }
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  public toggleWebcam(): void {
    if(!this.mostrarWebcam){this.item = new Item("", "", "", "", 0, "", 0, "");}
    this.mostrarWebcam = !this.mostrarWebcam;
    
  }

  scanSuccessHandler(event: string, modalName: any) {
    //console.log(event);
    if (this.item.docCode == "") {
      this.results.shift(); // unshit();
      this.obtenerToken(event, modalName);
    }
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach((camera) => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        this.scannerEnabled = true;
      }
    });
  }

  obtenerToken(url, modalName) {
    if (this.item.docCode == "") {
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
          this.crearPregunta1(this.item);
          this.crearPregunta2(this.item);
          this.modalService.open(modalName);
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
    else{
      return "";
    }
    
  }

  crearPregunta1(item: Item) {
    this.pregunta1.pregunta = "¿Cuál es tu edad actual?";
    this.pregunta1.opcion1 = item.age as unknown as string;
    this.pregunta1.opcion2 = (item.age + 3) as unknown as string;
    this.pregunta1.opcion3 = (item.age - 2) as unknown as string;
  }

  crearPregunta2(item: Item) {
    this.pregunta2.pregunta = "¿Cuál es su última fecha de vacunación?";
    this.pregunta2.opcion1 = item.lastVaccinationDate as string;
    this.pregunta2.opcion2 = "20/16/2021";
    this.pregunta2.opcion3 = "15/12/2022";
  }
}
