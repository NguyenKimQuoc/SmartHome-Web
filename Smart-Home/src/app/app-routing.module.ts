import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// page component
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
    {  path: 'home', component: HomeComponent },
    {  path: 'room', component: RoomComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes), ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  