import { Component, OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ResponsiblesService } from 'src/service/responsibles.service';
import { SkillsService } from 'src/service/skills.service';

@Component({
  selector: 'app-crear-tareas',
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.scss'],
  providers: [MessageService]
})
export class CrearTareasComponent implements OnInit {

  responsibles: any[] = [];
  skillsForWorker: any[] = [];
  idWorker: number = 0;
  skills: any[] = [];
  visibleNewSkill: boolean = false;


  constructor(private responsiblesService: ResponsiblesService,
    private spinner: NgxSpinnerService,
    private skillsService: SkillsService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getWorkers();
    this.spinner.hide();
  }

  getWorkers(){
    this.responsibles = this.responsiblesService.getRResponsible();
  }

  getSkillsByWorker(event: any){
    this.idWorker = event.value.key;
    const skillIds = event.value.skill.map((s: any) => s.id);
    const allSkills = this.skillsService.getSkills();
    this.skillsForWorker = allSkills.filter(skill => skillIds.includes(skill.key));
  }

  addSkill(event: any) {
    this.spinner.show();
    if (this.idWorker) {
      const result = this.responsiblesService.addSkill(this.idWorker, event.value.key);
      this.visibleNewSkill = false;
      if (result ){
        this.messageService.add({severity: 'error', detail: result})
      }else{
        this.messageService.add({severity: 'success', detail: "Habilidad asignada"})
      }
    } 
    this.spinner.hide();
  }

  getSkills(){
    this.skills = this.skillsService.getSkills();
    this.visibleNewSkill = true;
  }


}
