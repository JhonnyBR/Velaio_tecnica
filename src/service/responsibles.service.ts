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

  addSkill(responsibleId: number, skillId: number): string | null {
    const responsible = this.responsibles.find(r => r.key === responsibleId);
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

  getResponsibleNameById(id: number): string | undefined {
    const responsible = this.responsibles.find(r => r.key === id);
    return responsible ? responsible.name : undefined;
  }


  addResponsible(newResponsible: { name: string; age: number; skill: { id: number }[] }): string {
    try {
      const exists = this.responsibles.some(r => r.name === newResponsible.name);
      if(exists){
        return "Usuario existente";
      }else{
        const newId = this.responsibles.length ? this.responsibles[this.responsibles.length - 1].key + 1 : 1;
      const responsibleToAdd = {
        key: newId,
        ...newResponsible
      };
      
      this.responsibles.push(responsibleToAdd);
      return "Creado";
      }
    } catch (error) {
      return "" + error;
    }
  }


}
