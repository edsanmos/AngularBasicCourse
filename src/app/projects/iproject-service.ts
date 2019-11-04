import { Project } from './models/project.models';

export interface IprojectService {
    filtrarPorNombre:(name:string)=>Project[];
    filtrarPorId:(id:number)=>Project;
    agregarProyecto(proyecto:Project);
    cuentaProyectos:()=>number;
    obtenerProyectos:()=>Project[];
}
