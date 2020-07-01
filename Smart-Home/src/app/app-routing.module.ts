import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

// page component
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { GardenComponent } from './garden/garden.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'garden', component: GardenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule {}
