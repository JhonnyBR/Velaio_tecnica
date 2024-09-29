import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-taks', component: CrearTareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
