import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculonesComponent } from './peliculones/peliculones.component';
import { AdminComponent } from './admin/admin.component';
import { ReservasComponent } from './reservas/reservas.component';


const routes: Routes = [
  {path: '', component: PeliculonesComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'reser', component: ReservasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
