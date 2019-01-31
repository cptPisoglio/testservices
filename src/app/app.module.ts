import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { DevicesComponent } from './devices/devices.component';
import { PintypeComponent } from './pintype/pintype.component';
import { PintypesComponent } from './pintypes/pintypes.component';
import { PintypeuidComponent } from './pintypeuid/pintypeuid.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceComponent,
    PintypesComponent,
    PintypeComponent,
    PintypeuidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
