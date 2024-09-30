import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ResponsiblesService } from 'src/service/responsibles.service';
import { SkillsService } from 'src/service/skills.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {

  workers: FormGroup;
  skills: any[] = [];
  constructor(
    private fb: FormBuilder,
    private skilsService: SkillsService,
    private responsiblesService: ResponsiblesService,
    private messageService: MessageService
  ) {
    this.workers = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      selectedSkils: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.skills = this.skilsService.getSkills();
  }


  create() {
    const convertObjet = {
      name: this.workers.value.name,
      age: this.workers.value.age,
      skill: this.workers.value.selectedSkils.map((skill: any) => ({ id: skill.key }))
    }

    const success = this.responsiblesService.addResponsible(convertObjet);
    if(success == "Creado"){
      this.messageService.add({ severity: 'success', detail: 'Worker creado con éxito.' });
    }else if("Usuario existente"){
      this.messageService.add({ severity: 'error', detail: 'Usuario ya existe.' });
    }else{
      this.messageService.add({ severity: 'error', detail: 'Falla al crear el usuario.' });
    }
  }

}
