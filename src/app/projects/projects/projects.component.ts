import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../models/project.models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public header = 'Projects';
  public description = 'Manage your project list';
  public numProjects:number;  
  public projects:Project[];
  
  constructor(private ProjectSrv:ProjectServiceService) { 
    this.projects = this.ProjectSrv.obtenerProyectos();
    this.numProjects = this.ProjectSrv.cuentaProyectos();
  }

  ngOnInit() {    
   
  }
  procesaFiltro(nombre:string)
  {
    if(nombre.trim()!=""){
      this.projects = this.ProjectSrv.filtrarPorNombre(nombre); 
    }
  }

}
