import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask() {
    return [
      {
        key: 0,
        date: '2024-07-14',
        responsible: [
          {
            id: 1
          },
          {
            id: 3
          }
        ]
      },
      {
        key: 1,
        date: '2024-07-14',
        responsible: [
          {
            id: 2
          },
          {
            id: 4
          }
        ]
      }
    ];
  }
}
