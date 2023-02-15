import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/** Interfaces */
import { RespuestaApi } from '../interface/respuestaapi';

@Injectable({
    providedIn: 'root',
})
export class UsuarioServicio {

    private controller: string = 'Usuario/';

    constructor(private _http: HttpClient) {
    }

    registro(usuario: any): Observable<RespuestaApi> {
        let body = JSON.stringify(usuario);
        const url = `${this.controller}Registro`;
        return this._http.post<RespuestaApi>(url, body);

    }

    listar(): Observable<RespuestaApi> {
        const url = `${this.controller}Listar`;
        return this._http.get<RespuestaApi>(url);
    }
}