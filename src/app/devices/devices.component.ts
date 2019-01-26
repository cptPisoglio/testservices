import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DevicesService } from 'src/app/shared/services/devices.service';

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

    private response: IDevice[];

    public constructor(protected devicesSvc: DevicesService) { }

    public ngOnInit(): void {
        this.getData();
    }

    private getData(): void {
        this.devicesSvc.getDevices().pipe(
            tap(response => this.response = response.data)
        ).subscribe();
    }

}

export interface IDevice {
    userUid: string;
    fcmToken: string;
    deviceUid: string;
    lastLocation: {
        type: string,
        coordinates: number[] // in order [lng, lat]
    };
}
