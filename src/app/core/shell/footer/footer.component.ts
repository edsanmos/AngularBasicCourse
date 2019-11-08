import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  @Input() public audits:String[];
  constructor() { }

  ngOnInit() {
  }

}
