import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {

    public constructor(protected httpClient: HttpClient) { }

    public get<T>(endpoint: string): Observable<T> {
        return this.httpClient.get<T>(endpoint, { headers: this.buildHeaders() });
    }

    private buildHeaders(): HttpHeaders {
        const h = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        debugger;
        return h;
    }
}
