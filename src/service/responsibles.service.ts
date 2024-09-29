import { Injectable } from '@angular/core';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsiblesService {

  constructor(private skillsService: SkillsService) { }

  private responsibles = [
    {
      key: 1,
      name: 'Juan Perez',
      age: 20,
      skill: [
        {
          id: 5
        },
        {
          id: 2
        }
      ]
    },
    {
      key: 2,
      name: 'Laura Peralta',
      age: 25,
      skill: [
        {
          id: 6
        },
        {
          id: 3
        }
      ]
    },
    {
      key: 3,
      name: 'Luna Aguirre',
      age: 22,
      skill: [
        {
          id: 4
        },
        {
          id: 2
        }
      ]
    }
  ];

  getRResponsible() {
    return this.responsibles;
  }

  addSkill(responsibleId: number, skillId: number): string | null{
    const responsible =  this.responsibles.find(r => r.key === responsibleId);
    const allSkills = this.skillsService.getSkills();

    if (!allSkills.some(skill => skill.key === skillId)) {
      return `No existe la  habilidad ${skillId}`;
    }

    if (responsible && !responsible.skill.some(s => s.id === skillId)) {
      responsible.skill.push({ id: skillId });
      return null; 
    }

    return `El usuario${responsibleId} ya cuenta con la habilidad asignada.`;
  }
  
}
