import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    {
      key: 1,
      date: '2024-07-14',
      name: "Crear carrito",
      responsible: [
        { id: 1 },
        { id: 3 }
      ]
    },
    {
      key: 2,
      date: '2024-07-14',
      name: "Validar sincronización",
      responsible: [
        { id: 2 },
        { id: 4 }
      ]
    }
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(newTask: any): string | null {
    if (this.taskExists(newTask)) {
      return 'La tarea ya existe.';
    }
    const newKey = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].key + 1 : 1; // Generar nuevo key
    this.tasks.push({ ...newTask, key: newKey });
    return null;
  }

  private taskExists(task: any): boolean {
    return this.tasks.some(existingTask =>
      existingTask.date === task.date &&
      existingTask.name === task.name &&
      JSON.stringify(existingTask.responsible) === JSON.stringify(task.responsible)
    );
  }
}
