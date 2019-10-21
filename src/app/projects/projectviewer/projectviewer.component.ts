import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'minimatch';

@Component({
  selector: 'app-projectviewer',
  templateUrl: './projectviewer.component.html',
  styles: []
})
export class ProjectviewerComponent implements OnInit{

  public header = 'Project Detail';
  public description = '';
  public projectId:number; 
  public projectName;
  public projects = [];
  public results = [];
  
  constructor(activateRoute: ActivatedRoute) {    
    this.projectId = parseInt(activateRoute.snapshot.params['id']);     
  }

  ngOnInit() {
    this.projects = environment.projects;  
    this.results = this.projects.filter(project => parseInt(project.id) === this.projectId)   
    this.projectName = this.results[0].name;     
   
  }

    
}
