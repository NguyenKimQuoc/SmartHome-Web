import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

import { AppComponent } from './app.component';
import { HomeComponent } from './utils/pages/home/home.component';
import { RoomComponent } from './utils/pages/room/room.component';
import { GardenComponent } from './utils/pages/garden/garden.component';
import { DevicesComponent } from './utils/pages/room/devices/devices.component';

import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './utils/services/auth.service';
import { LoginComponent } from './common/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 3000,
  protocol: 'ws',
  path: ''
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    LoginComponent,
    GardenComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
