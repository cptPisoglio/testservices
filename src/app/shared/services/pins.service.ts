import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PinType } from 'src/app/core/models/pintype.model';
import { BaseResponseDto } from 'src/app/core/dtos/base-response.dto';
import { BaseHttpService } from 'src/app/core/services/basehttp.service';

@Injectable({
    providedIn: 'root'
})
export class PinsService {

    //private userUid: string = `5K5vtTbWBTfKs6HMAQo8c5SCwDi1`;
    private pinTypesUrl: string = `https://redux-dev.shellyapp.it/v1/pins/types`;

    public constructor(
        private readonly http: BaseHttpService
    ) { }

    public getPinTypes(): Observable<BaseResponseDto<PinType[]>> {
        return this.http.get<BaseResponseDto<PinType[]>>(`${this.pinTypesUrl}`).pipe(
            tap(res => console.log(res))
        );
    };
    
    public getPinTypeByUid(uid: string): Observable<BaseResponseDto<PinType>>{
        return this.http.get<BaseResponseDto<PinType>>(`${this.pinTypesUrl}/${uid}`)
    }

}
