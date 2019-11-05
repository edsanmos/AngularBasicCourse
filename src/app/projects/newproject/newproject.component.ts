import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.models';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public header = 'New Project';
  public description = 'Fill form to add new project';
  public project:Project; 
  
  constructor(private router: Router, private ProjectSrv:ProjectServiceService) { 
  }
  
  ngOnInit() {  
     
  }
 
  
  procesaAlta(proyeto:Project)
  {
    this.ProjectSrv.agregarProyecto(proyeto);     
    this.router.navigate(['/projects/']);   
    
  }
}

