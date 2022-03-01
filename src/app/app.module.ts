import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoIngresoComponent } from './listado-ingreso/listado-ingreso.component';
import { VerHorasComponent } from './ver-horas/ver-horas.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'ver-horas', component:VerHorasComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListadoIngresoComponent,
    VerHorasComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
