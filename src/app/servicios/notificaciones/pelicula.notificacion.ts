import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class NotifacionPelicula {

    @Output() BuscarPelicula: EventEmitter<string> = new EventEmitter();
    
    constructor()
    {

    }
}