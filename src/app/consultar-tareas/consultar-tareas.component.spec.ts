import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTareasComponent } from './consultar-tareas.component';

describe('ConsultarTareasComponent', () => {
  let component: ConsultarTareasComponent;
  let fixture: ComponentFixture<ConsultarTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarTareasComponent]
    });
    fixture = TestBed.createComponent(ConsultarTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
