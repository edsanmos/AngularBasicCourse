import { Injectable } from '@angular/core';
import { IprojectService } from './iproject-service';
import { Project } from './models/project.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService implements IprojectService{
  obtenerProyectos: () => Observable<Project[]>;
  filtrarPorNombre: (name: string) =>  Observable<Project[]>;
  filtrarPorId: (id: number) => Observable<Project>;
  agregarProyecto(proyecto: Project) {};

  constructor(private httpclient:HttpClient) { }
}
