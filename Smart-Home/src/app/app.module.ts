import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './utils/pages/home/home.component';
import { RoomComponent } from './utils/pages/room/room.component';
import { GardenComponent } from './utils/pages/garden/garden.component';
import { DevicesComponent } from './utils/pages/room/devices/devices.component';

import { AuthService } from './utils/services/auth.service';
import { LoginComponent } from './common/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
