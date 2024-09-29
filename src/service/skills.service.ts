import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
    return [
      {
        key: 0,
        description: 'Angular'
      }, {
        key: 1,
        description: 'Node'
      }, {
        key: 2,
        description: 'PHP'
      }, {
        key: 3,
        description: 'MSServer'
      }, {
        key: 4,
        description: 'Java'
      }, {
        key: 5,
        description: 'Python'
      }
    ];
  }
}
