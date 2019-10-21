import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectviewerComponent } from './projectviewer/projectviewer.component';
import { NewprojectComponent } from './newproject/newproject.component';


const routes: Routes = [

  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewprojectComponent
  },
  {
    path: ':id',
    component: ProjectviewerComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
