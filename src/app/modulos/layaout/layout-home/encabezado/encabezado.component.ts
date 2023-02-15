import { Component, OnInit, OnDestroy } from '@angular/core';

/** Importación de servicios */
import { AutorizacionServicio } from 'src/app/servicios/autorizacion.service';

/** Importación de interfaces */
import { Autorizacion } from 'src/app/interface/autorizacion';
import { Router } from '@angular/router';
import { NotifacionPelicula } from 'src/app/servicios/notificaciones/pelicula.notificacion';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit, OnDestroy {

  /** Propiedad nombre del usuario */
  public nombre: string = '';

  /** Propiedad filtro */
  public filtroPelicula: string = "";

  /** Propiedad que indica si hay alguien autenticado */
  public estaAutenticado: boolean = false;

  constructor(private _servicio: AutorizacionServicio,
    private _notificaciones: NotifacionPelicula,
    private _roter: Router) {

  }

  ngOnInit(): void {
    const sesion: Autorizacion = this._servicio.session;
    if (sesion !== null) {
      this.nombre = sesion.Nombre;
      this.estaAutenticado = true;
    }
  }

  ngOnDestroy(): void {

  }

  onCerrarSesion() {
    this._servicio.cerrarSesion();
    this.estaAutenticado = false;
  }

  onIniciarSesion() {
    this._roter.navigate(['/login']);
  }

  eventoBuscar() {
    this._roter.navigate(['catalogo']);
    this._notificaciones.BuscarPelicula.emit(this.filtroPelicula);
  }

}
