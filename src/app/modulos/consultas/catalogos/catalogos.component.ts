import { Component } from '@angular/core';
import { NotifacionPelicula } from '../../../servicios/notificaciones/pelicula.notificacion'

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
})
export class CatalogosComponent {

  constructor(private _notificacion: NotifacionPelicula) {

    _notificacion.BuscarPelicula
      .subscribe((filtro: string) => {
        console.log(filtro);
      });
  }

}
