import { Component, OnInit, Input } from '@angular/core';
import { IDevice } from 'src/app/core/models/device.model';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    @Input() device: IDevice

    public deviceKeys: string[];

    constructor() { }

    ngOnInit() {
        this.populateKeys(this.device);
    }

    populateKeys(device: IDevice): void {
        this.deviceKeys = Object.keys(device);
    }

}
