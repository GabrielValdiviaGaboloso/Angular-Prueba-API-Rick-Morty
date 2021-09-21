import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/componente/home/home.component';
import { ProyectoComponent } from '../app/componente/proyecto/proyecto.component';
import { ContactoComponent } from '../app/componente/contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'proyecto', component: ProyectoComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
