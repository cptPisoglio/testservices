import { Component, OnInit } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { DevicesService } from 'src/app/shared/services/devices.service';

import { IDevice } from '../core/models/device.model';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

    public devices: IDevice[];

    public constructor(protected devicesSvc: DevicesService) { }

    public ngOnInit(): void {
        this.getData();
    }

    private getData(): void {
        this.devicesSvc.getDevices().pipe(
            tap(response => this.devices = response.data)
        ).subscribe();
    }
}




