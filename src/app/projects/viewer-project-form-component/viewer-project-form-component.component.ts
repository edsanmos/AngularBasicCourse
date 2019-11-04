import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-project-form-component',
  templateUrl: './viewer-project-form-component.component.html',
  styles: []
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() public projectId:number;
  @Input() public projectName:String;
  constructor() { }

  ngOnInit() {
  }

}
