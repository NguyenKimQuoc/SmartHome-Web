import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// page component
import { HomeComponent } from './utils/pages/home/home.component';
import { RoomComponent } from './utils/pages/room/room.component';
import { GardenComponent } from './utils/pages/garden/garden.component';
import { DevicesComponent } from './utils/pages/room/devices/devices.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'garden', component: GardenComponent },
  { path: 'room/:roomID', component: DevicesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule, CommonModule, ReactiveFormsModule]
})
export class AppRoutingModule {}
