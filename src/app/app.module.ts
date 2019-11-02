import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculonesComponent } from './peliculones/peliculones.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PelisService } from 'src/app/pelis.service';
import { AdminComponent } from './admin/admin.component';
import { ReservasComponent } from './reservas/reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculonesComponent,
    AdminComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [PelisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
