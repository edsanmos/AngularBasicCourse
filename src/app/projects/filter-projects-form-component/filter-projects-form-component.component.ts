import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../models/project.models';

@Component({
  selector: 'app-filter-projects-form-component',
  templateUrl: './filter-projects-form-component.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  project:Project;
  @Output() public EventoFiltro = new EventEmitter<string>();
  constructor() { this.project = { id: -1, name: ''  }}

  ngOnInit() {
  }

  filterProject(){
    this.EventoFiltro.emit(this.project.name);
  }


}
