import { Injectable } from '@angular/core';
import { IprojectService } from './iproject-service';
import { Project } from './models/project.models';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService implements IprojectService{
  obtenerProyectos: () => Project[];
  cuentaProyectos: () => number;
  filtrarPorNombre: (name: string) => Project[];
  filtrarPorId: (id: number) => Project;
  agregarProyecto(proyecto: Project) {}

  constructor() { }
}
