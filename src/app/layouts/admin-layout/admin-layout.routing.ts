import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegistrarAgenciaComponent } from 'app/components/registrar-agencia/registrar-agencia.component';
import { ActualizarDatosAgenciaComponent } from 'app/components/actualizar-datos-agencia/actualizar-datos-agencia.component';
import { VerificationAutoComponent } from 'app/components/verification-auto/verification-auto.component';
import { VerificationManualComponent } from 'app/components/verification-manual/verification-manual.component';
import { ActualizarDatosEmpresaComponent } from 'app/components/actualizar-datos-empresa/actualizar-datos-empresa.component';
import { ReportesComponent } from 'app/components/reportes/reportes.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'reportes',      component: ReportesComponent },
    { path: 'verification-auto',      component: VerificationAutoComponent },
    { path: 'verification-manual',      component: VerificationManualComponent },
    { path: 'registro-agencia',      component: RegistrarAgenciaComponent },
    { path: 'editar-agencia',      component: ActualizarDatosAgenciaComponent },
    { path: 'editar-empresa',      component: ActualizarDatosEmpresaComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
