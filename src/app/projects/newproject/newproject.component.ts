import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {
  public header = 'New Project';
  public description = 'Fill form to add new project';
  public project:Project; 
  
  constructor(private router: Router) { 
  }
  
 

  ngOnInit() {  
    this.project = { id: -1, name: '' }; 
  }

  public saveProject() {
    
    environment.projects.push({
      ...this.project        
     }); 
     
    this.router.navigate(['/projects/']);   
    
  }
}
interface Project {
  id: number;
  name: string;
}
