import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//dependencias

import { NgxSpinnerComponent, NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    CrearTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerComponent,
    BrowserAnimationsModule,
    ImageModule,
    DividerModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
