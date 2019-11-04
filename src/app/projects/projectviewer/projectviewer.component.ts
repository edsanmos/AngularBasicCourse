import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'minimatch';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../models/project.models';

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
  public project:Project;
  
  constructor(private activateRoute: ActivatedRoute, private ProjectSrv:ProjectServiceService) {    
    this.projectId = parseInt(this.activateRoute.snapshot.params['id']);      
    
  }

  ngOnInit() { 
      this.project = this.ProjectSrv.filtrarPorId(this.projectId);
      this.projectName = this.project.name    
    
  }

    
}
