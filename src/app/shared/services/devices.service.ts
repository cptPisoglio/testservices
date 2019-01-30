import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BaseHttpService } from 'src/app/core/services/basehttp.service';

@Injectable({
    providedIn: 'root'
})
export class DevicesService {

    private userUid: string = `G3KqXnw3S5Ob5EfUZRoYHADN40m1`;
    private devicesUrl: string = `https://redux-dev.shellyapp.it/v1/devices/user/`;

    public constructor(protected http: BaseHttpService) {

    }

    public getDevices(): Observable<any> {
        return this.http.get<any>(`${this.devicesUrl}${this.userUid}`).pipe(
            tap(res => console.log(res))
        );
    };

}
