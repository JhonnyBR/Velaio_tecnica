import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ConsultarTareasComponent } from './consultar-tareas/consultar-tareas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-taks', component: CrearTareasComponent},
  {path: 'search-task', component: ConsultarTareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
