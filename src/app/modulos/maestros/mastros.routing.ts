import { Route } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { GeneroComponent } from './genero/genero.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

export const MaestroRutas: Route[] = [
    { path: 'actor', component: ActorComponent },
    { path: 'genero', component:  GeneroComponent},
    { path: 'pelicula', component: PeliculaComponent },
]