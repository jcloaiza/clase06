import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Componentes */
import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './modulos/layaout/layout-login/layout-login.component';
import { LayoutHomeComponent } from './modulos/layaout/layout-home/layout-home.component';
import { appRutas } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './servicios/base/inteceptor';
import { EncabezadoComponent } from './modulos/layaout/layout-home/encabezado/encabezado.component';
import { InicioComponent } from './modulos/layaout/layout-home/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutHomeComponent,
    EncabezadoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers:
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
