import { Injectable } from '@angular/core';
import { IprojectService } from './iproject-service';
import { Project } from './models/project.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceImplService implements IprojectService {
  obtenerProyectos=():Project[]=>{
    return environment.projects;
  }
   
  cuentaProyectos=():number => {
    return environment.projects.length;
  }
  filtrarPorNombre = (name: string): Project[] => {
    if (name.trim()!==""){
      return environment.projects.filter(projecto => projecto.name.toUpperCase().includes(name.toUpperCase()));
    }else{
      return environment.projects;
    }
   
  }

  filtrarPorId = (id: number): Project => {
    return environment.projects.filter(projecto => projecto.id === id)[0];
     
  }
  agregarProyecto(proyecto: Project){
    environment.projects.push(proyecto);
  } 

}
