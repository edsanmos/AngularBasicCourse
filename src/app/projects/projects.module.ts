import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProjectsComponent, ProjectviewerComponent, NewprojectComponent, DashboardComponent, FilterProjectsFormComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpClientModule
  ], providers: [
    {
      provide: ProjectServiceService,
      useClass: ProjectServiceImplService
    }
  ]
})
export class ProjectsModule { }
