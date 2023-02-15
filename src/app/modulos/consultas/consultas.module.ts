import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsultaRutas } from './consultas.routing';



@NgModule({
  declarations: [
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ConsultaRutas)
  ]
})
export class ConsultasModule { }
