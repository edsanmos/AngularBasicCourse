import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectServiceService } from '../project-service.service';
import { Project } from '../models/project.models';
import { Observable } from 'rxjs';
import { count } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public header = 'Projects';
  public description = 'Manage your project list';
  public projects=<Project[]>{};
  
  
  constructor(private ProjectSrv:ProjectServiceService, private route: ActivatedRoute) {
    route.params.subscribe(val => {this.ngOnInit();});
  }

  ngOnInit() { 
    this.ProjectSrv.obtenerProyectos().subscribe(list => (this.projects = list));
  }

  procesaFiltro(nombre:string)
  {
    if(nombre.trim()!=""){
      this.ProjectSrv.filtrarPorNombre(nombre).subscribe(list => (this.projects = list));
    }else{
      this.ProjectSrv.obtenerProyectos().subscribe(list => (this.projects = list));
    }

  }
}