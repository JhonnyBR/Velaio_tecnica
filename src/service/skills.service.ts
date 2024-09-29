import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills() {
    return [
      {
        key: 1,
        description: 'Angular'
      }, {
        key: 2,
        description: 'Node'
      }, {
        key: 3,
        description: 'PHP'
      }, {
        key: 4,
        description: 'MSServer'
      }, {
        key: 5,
        description: 'Java'
      }, {
        key: 6,
        description: 'Python'
      }
    ];
  }
}
