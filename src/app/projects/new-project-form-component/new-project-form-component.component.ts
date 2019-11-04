import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from '../models/project.models';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  public project: Project;
  @Output() public EventoAlta = new EventEmitter<Project>();

  constructor() { this.project = { id: -1, name: '' }; }  

  ngOnInit() {}
  
  saveProject() {
    this.EventoAlta.emit(this.project);
  }
}
