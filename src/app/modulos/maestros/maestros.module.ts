import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorComponent } from './actor/actor.component';
import { GeneroComponent } from './genero/genero.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { RouterModule } from '@angular/router';
import { MaestroRutas } from './mastros.routing';

@NgModule({
  declarations: [
    ActorComponent,
    GeneroComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MaestroRutas)
  ]
})
export class MaestrosModule { }
