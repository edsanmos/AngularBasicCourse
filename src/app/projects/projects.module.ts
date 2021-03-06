import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectviewerComponent } from './projectviewer/projectviewer.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { DashboardComponent } from './dashboard-component/dashboard-component.component';
import { FilterProjectsFormComponent } from './filter-projects-form-component/filter-projects-form-component.component';
import { ProjectsListComponent } from './projects-list-component/projects-list-component.component';
import { ViewerProjectFormComponent } from './viewer-project-form-component/viewer-project-form-component.component';
import { NewProjectFormComponent } from './new-project-form-component/new-project-form-component.component';
import { ProjectServiceService } from './project-service.service';
import { ProjectServiceImplService } from './project-service-impl.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuditInterceptorService } from '../audit/audit-interceptor.service';


@NgModule({
  declarations: [ProjectsComponent, ProjectviewerComponent, NewprojectComponent, DashboardComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], providers: [
    {
      provide: ProjectServiceService,
      useClass: ProjectServiceImplService
    }
  ]
})
export class ProjectsModule { }
