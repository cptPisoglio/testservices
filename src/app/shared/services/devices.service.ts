import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IDevice } from 'src/app/core/models/device.model';
import { BaseResponseDto } from 'src/app/core/dtos/base-response.dto';
import { BaseHttpService } from 'src/app/core/services/basehttp.service';

@Injectable({
    providedIn: 'root'
})
export class DevicesService {

    private userUid: string = `5K5vtTbWBTfKs6HMAQo8c5SCwDi1`;
    private devicesUrl: string = `https://redux-dev.shellyapp.it/v1/devices/user/`;

    public constructor(
        private readonly http: BaseHttpService
    ) { }

    public getDevices(): Observable<BaseResponseDto<IDevice[]>> {
        return this.http.get<BaseResponseDto<IDevice[]>>(`${this.devicesUrl}${this.userUid}`).pipe(
            tap(res => console.log(res))
        );
    };

}
