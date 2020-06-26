import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { BedRoomComponent } from './room/bed-room/bed-room.component';
// import { DryclothesComponent } from './graden/dryclothes/dryclothes.component';
// import { WaterTreeComponent } from './graden/water-tree/water-tree.component';


import { AuthService } from './utils/service/auth.service';
import { LoginComponent } from './utils/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    BedRoomComponent,
    LoginComponent,
    // DryclothesComponent,
    // WaterTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
