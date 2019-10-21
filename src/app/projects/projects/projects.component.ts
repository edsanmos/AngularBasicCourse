import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public header = 'Projects';
  public description = 'Manage your project list';
  public numProjects:number;
  public counterClass = 'tag secondary'; 
  
  public projects = [];
  
  constructor() { }

  ngOnInit() {
    this.projects = environment.projects;
    this.numProjects = this.projects.length;
  }

}
