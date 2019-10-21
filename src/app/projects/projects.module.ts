import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectviewerComponent } from './projectviewer/projectviewer.component';
import { NewprojectComponent } from './newproject/newproject.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectviewerComponent, NewprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
