import { Component, OnInit, Input } from '@angular/core';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  @Input() public numProjects:number;
  public counterClass = 'tag secondary'; 
  constructor() { }

  ngOnInit() {
   
  }

}
