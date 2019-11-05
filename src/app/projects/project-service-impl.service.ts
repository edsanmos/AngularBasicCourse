import { Injectable } from '@angular/core';
import { IprojectService } from './iproject-service';
import { Project } from './models/project.models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, count, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceImplService implements IprojectService {

  private urlApi = 'https://api-base.herokuapp.com/api/pub/projects';
  private projects: Project[];
  private projects$: Observable<Project[]>;

  constructor(private httpclient: HttpClient){}

  obtenerProyectos = (): Observable<Project[]> => {
    return this.httpclient.get<Project[]>(this.urlApi).pipe(share());
  }

  filtrarPorNombre = (name: string): Observable<Project[]> => {
    if (name.trim() !== "") {
      return this.httpclient.get<Project[]>(this.urlApi).pipe(
        map(projects => projects.filter(
            project => project.name.toUpperCase().includes(name.toUpperCase())
            )
        )          
      );
    } else {
      return this.httpclient.get<Project[]>(this.urlApi);
    }

  }

  filtrarPorId = (id: number): Observable<Project> => {
    return this.httpclient.get<Project>(this.urlApi+ "/" +id);
  }
  
  agregarProyecto(proyecto: Project) {
    this.httpclient.post(this.urlApi, proyecto).subscribe();
  }

  
}
