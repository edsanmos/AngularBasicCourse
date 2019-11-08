import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../models/project.models';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  public project: Project;
  public formGroup: FormGroup;
  @Output() public EventoAlta = new EventEmitter<Project>();

  constructor(private formBuilder: FormBuilder) {  }  

  ngOnInit() {
    this.buildForm();
  }
  
  saveProject() {
    this.EventoAlta.emit(this.formGroup.value);
  }
  
  private buildForm(){
    const minProjectNameLength = 10;

    this.formGroup = this.formBuilder.group({
      name: ['',[Validators.required,
        Validators.minLength(minProjectNameLength),
        this.validateProjectName]],
      id: ['', [
        Validators.required, this.ValidateProjectId
      ]]});
    }
    
    private validateProjectName(control: AbstractControl) {
      const name:String = control.value;
      let error = null;
      if (!name.startsWith('Project')) {
        error = { ...error, ProjectName: 'El nombre del proyecto debe comenzar por Project' };
      }
      return error;
    }

    private ValidateProjectId(control: AbstractControl) {
      const id:number = control.value;
      let error = null;
      if (id<=0) {
        error = { ...error, NumeroNegativo: 'Requiere un id mayor que cero' };
      }
      if (id>100) {
        error = { ...error, NumeroMayorLimite: 'Requiere un id menor que cien' };
      }
      return error;
    }

    public getError(controlName: string): string {
      let error = '';
      const control = this.formGroup.get(controlName);
      if (control.touched && control.errors != null) {
        error = JSON.stringify(control.errors);
      }
      return error;
    }
}
