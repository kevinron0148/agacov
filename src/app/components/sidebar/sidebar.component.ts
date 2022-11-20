import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  classCss: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/registro-agencia",
    title: "Registrar Agencia",
    icon: "contacts",
    class: "",
    classCss: "",
  },
  {
    path: "/reportes",
    title: "Reportes",
    icon: "description",
    class: "",
    classCss: "editAgencia",
  },
  {
    path: "/editar-agencia",
    title: "Actualizar Agencia",
    icon: "mode_edit",
    class: "",
    classCss: "editAgencia",
  },
  {
    path: "/editar-empresa",
    title: "Mi Perfil",
    icon: "mode_edit",
    class: "",
    classCss: "editAgencia",
  },
  {
    path: "/verification-auto",
    title: "Verificación Automatica",
    icon: "verified_user",
    class: "",
    classCss: "editAgencia",
  },
  {
    path: "/verification-manual",
    title: "Verificación Manual",
    icon: "verified_user",
    class: "",
    classCss: "editAgencia",
  },
  // {
  //   path: "/dashboard",
  //   title: "Main",
  //   icon: "dashboard",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/user-profile",
  //   title: "User Profile",
  //   icon: "person",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/table-list",
  //   title: "Table List",
  //   icon: "content_paste",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   icon: "library_books",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   icon: "bubble_chart",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   icon: "location_on",
  //   class: "",
  //   classCss: "",
  // },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   icon: "notifications",
  //   class: "",
  //   classCss: "",
  // },
  {
    path: "/",
    title: "Cerrar Sesión",
    icon: "close",
    class: "active-pro",
    classCss: "cerrar",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
