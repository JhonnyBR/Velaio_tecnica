import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { ResponsiblesService } from 'src/service/responsibles.service';
import { SkillsService } from 'src/service/skills.service';
import { TaskService } from 'src/service/task.service';
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
  responsibleForTask: any[] = [];

  task: FormGroup;
  constructor(private responsiblesService: ResponsiblesService,
    private spinner: NgxSpinnerService,
    private skillsService: SkillsService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {
    this.task = this.fb.group({
      nametask: ['', Validators.required],
      limitDate: ['', Validators.required],
      responsibles: ['']
    });
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

  assign() {
    if (!this.responsibleForTask.includes(this.idWorker)) {
      this.responsibleForTask.push(this.idWorker);
    } else {
      this.messageService.add({severity: 'error', detail: 'La persona ya se encuentra en la tarea.'})
    }
  }

  deallocate(){
    if (this.responsibleForTask.includes(this.idWorker)) {
      this.responsibleForTask = this.responsibleForTask.filter(id => id !== this.idWorker);
    } else {
      this.messageService.add({severity: 'error', detail: 'La persona no se encuentra en la tarea.'})
    }
  }

  create(){

    if(this.task.valid){
      if(this.responsibleForTask.length == 0){
        this.messageService.add({severity: 'error', detail: 'La tarea debe tener minimo un responsable.'})
      }else{
        this.task.get('responsibles')?.setValue(this.responsibleForTask);
        this.task.get('limitDate')?.setValue(formatDate(this.task.value.limitDate, 'yyyy-MM-dd', 'en-US'));
        const convertedObject = {
          date: this.task.value.limitDate,
          nane: this.task.value.nametask,
          responsible: this.responsibleForTask.map((id: number) => ({ id }))
        };
        const result = this.taskService.addTask(convertedObject);
        if (result) {
          this.messageService.add({ severity: 'error', detail: result });
        } else {
          this.messageService.add({ severity: 'success', detail: 'Tarea creada con éxito.' });
        }
      }
    }else{
      this.messageService.add({severity: 'error', detail: 'Favor completar la información.'})
    }

  }


}
