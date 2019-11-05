import { Component, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../models/project.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projectviewer',
  templateUrl: './projectviewer.component.html',
  styles: []
})
export class ProjectviewerComponent implements OnInit{

  public header = 'Project Detail';
  public description = '';
  public projectId:number; 
  public project$:Observable<Project>;
  
  constructor(private activateRoute: ActivatedRoute, private ProjectSrv:ProjectServiceService) {    
   this.projectId = parseInt(this.activateRoute.snapshot.params['id']);      
   
  }

  ngOnInit() { 
   this.project$ = this.ProjectSrv.filtrarPorId(this.projectId);
  }

    
}
