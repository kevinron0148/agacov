import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { WebcamModule } from 'ngx-webcam';
import { VerificationAutoComponent } from './components/verification-auto/verification-auto.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { VerificationManualComponent } from './components/verification-manual/verification-manual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    WebcamModule,
    ZXingScannerModule,
    BrowserModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    VerificationAutoComponent,
    VerificationManualComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
