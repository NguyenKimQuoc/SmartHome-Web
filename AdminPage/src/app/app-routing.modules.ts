import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoorComponent } from './Ulti/Pages/Door/door.component';
import { DryClothesComponent } from './Ulti/Pages/DryClothes/dryclothes.component';
import { PeopleDetectComponent } from './Ulti/Pages/PeopleDetect/peopledetect.component';
import { SmartLightComponent } from './Ulti/Pages/SmartLight/smartlight.component';
import { WaterTreeComponent } from './Ulti/Pages/WaterTree/watertree.component';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
const routesConfig:Routes = [
    {path: 'door', component: DoorComponent},
    {path: 'dryclothes', component: DryClothesComponent},
    {path: 'peopledetect', component: PeopleDetectComponent},
    {path: 'smartlight', component: SmartLightComponent},
    {path: 'watertree', component: WaterTreeComponent},
]
@NgModule({
    declarations: [
        DoorComponent,
        DryClothesComponent,
        PeopleDetectComponent,
        SmartLightComponent,
        WaterTreeComponent
    ],
    imports: [
        RouterModule.forRoot(routesConfig),
        CommonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}