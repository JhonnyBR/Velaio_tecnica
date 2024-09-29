import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      }, 
      {
        label: 'Tareas',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: "Crear",
            icon: 'pi pi-fw pi-check',
            routerLink: 'create-taks'
          }
        ]
      }
    ]
  }
}
