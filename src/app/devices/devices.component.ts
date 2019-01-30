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
        // this.devicesSvc.getDevices().pipe(
        //     tap(response => this.devices = response.data)
        // ).subscribe({
        //     error: err => {
        //         console.log('There was an error sorry :(');
        //     }
        // });

        this.devicesSvc.getDevices().subscribe(
            res => {
                this.devices = res.data;
                const z = 9;
                this.devicesSvc.getDevices().subscribe(res2 => {

                });
                
            },
            err => console.log('Sorry there was an error. D:'),
        );
    }

}




