import { Component, OnInit } from '@angular/core';
import { ResponsiblesService } from 'src/service/responsibles.service';
import { TaskService } from 'src/service/task.service';

@Component({
  selector: 'app-consultar-tareas',
  templateUrl: './consultar-tareas.component.html',
  styleUrls: ['./consultar-tareas.component.scss']
})
export class ConsultarTareasComponent implements OnInit {

  task: any[] = [];
  constructor(private taskService: TaskService,
    private responsiblesService: ResponsiblesService
  ) {

  }

  ngOnInit(): void {

    this.loadTasks();

  }

  loadTasks() {
    const tasks = this.taskService.getTasks();
    this.task = tasks.map(t => ({
      ...t,
      responsible: t.responsible.map((r: any) => this.responsiblesService.getResponsibleNameById(r.id)).join(', ')
    }));
  }

}
