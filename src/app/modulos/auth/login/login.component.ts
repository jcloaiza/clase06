import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

/** Importación servicios */
import { AutorizacionServicio } from '../../../servicios/autorizacion.service'

/** Importación de interfaces */
import { Login } from 'src/app/interface/login';
import { Mensaje } from 'src/app/interface/mensaje';
import { RespuestaApi } from 'src/app/interface/respuestaapi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {

  /** Propiedad de interface loguo */
  public login: Login = { Correo: '', Clave: '' };

  /** Propiedad para ver mensaje */
  public verMensaje: boolean = false;

  /** Propieadd mensajes */
  public mensaje: Mensaje = { Estado: false, Texto: '', Tipo: '' };

  /** Propiedad se suscripciones */
  public subcripcion$ = new Subject<void>();

  constructor(private _servicio: AutorizacionServicio,
    private _router: Router) {
  }

  ngOnInit(): void {
    console.log('Inicio componente');
  }

  ngOnDestroy(): void {
    this.subcripcion$.next();
    this.subcripcion$.complete();
    console.log('Fin componente');
  }

  eventoIngresar() {

    this.verMensaje = false;
    if (this.login.Correo.trim() === '' ||
      this.login.Clave.trim()
    ) {
      this.verMensaje = true;
      //Mensaje
    }

    //Inicio Spinner
    this._servicio
      .autenticar(this.login)
      .pipe(takeUntil(this.subcripcion$))
      .subscribe((respuesta: RespuestaApi) => {

        this.mensaje = respuesta.Mensaje;
        if (this.mensaje.Estado) {
          this._router.navigate(['./inicio']);
        } else { //Visualiza de no autenticación
          console.log('Noa utenticado');
        }

      }).add(() => {
        //Finalizar Spinner
      })

  }

  eventoRegistar() {
    this._router.navigate(['./nuevocliente']);
  }


}
