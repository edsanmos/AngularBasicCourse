import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  }
)
export class AuditStoreService {
  private audits = [];
  public audits$ = new BehaviorSubject<any[]>([]);
  
  constructor() {}
  
  public select$ = () => this.audits$.asObservable();
  
   public dispatch(audit) {
    this.audits.push(audit);
    this.audits$.next([...this.audits]);
  }
}
