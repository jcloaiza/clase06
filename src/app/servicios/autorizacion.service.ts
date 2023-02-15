import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

/**  Rutas de configuracion*/
import { environment } from 'src/environments/environment';


/** Interfaces */
import { Login } from '../interface/login';
import { RespuestaApi } from '../interface/respuestaapi';
import { Autorizacion } from '../interface/autorizacion';

@Injectable({
    providedIn: 'root',
})
export class AutorizacionServicio {


    private controller: string = 'Autorizacion/';

    /** Propiedad configuración */
    private configSession: string = 'Peliculas';


    constructor(private _http: HttpClient) {
    }

    set session(auth: Autorizacion) {
        localStorage.setItem(this.configSession, JSON.stringify(auth));
    }

    get session(): Autorizacion {
        if (localStorage.getItem(this.configSession) === undefined) {
            //cerrar
        }
        const sessionJson = localStorage.getItem(this.configSession);
        const session: Autorizacion = sessionJson !== null ? JSON.parse(sessionJson) : null;
        return session;
    }

    autenticar(login: Login): Observable<any> {

        let body = JSON.stringify(login);
        const url = `${this.controller}Autenticacion`;

        return this._http.post<RespuestaApi>(url, body)
            .pipe(
                switchMap((respuesta: RespuestaApi) => {

                    if (respuesta.Mensaje.Estado) {

                        // Asigna información de autenticación
                        this.session = respuesta.Datos;
                    }
                    // Return a new observable with the response
                    return of(respuesta);

                })
            );
    }

    cerrarSesion()
    {
        localStorage.removeItem(this.configSession);
        return of(true);
    }




}