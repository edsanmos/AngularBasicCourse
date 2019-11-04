import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const HomeRouting = './home/home.module#HomeModule';
const AboutRouting = './about/about.module#AboutModule';
const ContactsRouting = './contacts/contacts.module#ContactsModule';
const ProjectsRouting = './projects/projects.module#ProjectsModule';
const routes: Routes = [
{
    path:'',
    loadChildren: HomeRouting
  
},
{
  path:'about',
  loadChildren: AboutRouting

},
{
  path:'heroes',
  component:HeroesComponent

},
{
  path:'contacts',
  loadChildren:ContactsRouting

},
{
  path:'projects',
  loadChildren:ProjectsRouting

},
{
path: 'converter',
loadChildren: './converter/converter.module#ConverterModule'
},
{
  path:'not-found',
  component:NotFoundComponent
},
{
  path:'**',
  component:NotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
