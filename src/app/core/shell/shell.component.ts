import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { AuditStoreService } from 'src/app/audit/audit-store.service';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: []
})
export class ShellComponent implements OnInit {
  public audits$:Observable<any[]>;
  constructor(private auditstore:AuditStoreService) { 
    
  }

  ngOnInit() {
    this.audits$ = this.auditstore.select$().pipe(delay(0));
  }

}
