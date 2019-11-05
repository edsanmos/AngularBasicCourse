import { Project } from './models/project.models';
import { Observable } from 'rxjs';

export interface IprojectService {
    filtrarPorNombre:(name:string)=> Observable<Project[]>;
    filtrarPorId:(id:number)=>Observable<Project>;
    agregarProyecto(proyecto:Project);
    obtenerProyectos:()=>Observable<Project[]>;
    
}
