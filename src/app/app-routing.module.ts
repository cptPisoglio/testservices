import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { PintypesComponent } from './pintypes/pintypes.component';
import { PintypeuidComponent } from './pintypeuid/pintypeuid.component';


const routes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'pintypes', component: PintypesComponent },
  { path: 'pintypeuid', component: PintypeuidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
