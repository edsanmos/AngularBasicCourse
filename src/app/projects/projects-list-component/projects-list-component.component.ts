import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.models';

@Component({
  selector: 'app-projects-list-component',
  templateUrl: './projects-list-component.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects:Project[];
  constructor() { }

  ngOnInit() {
  }

}
