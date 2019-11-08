import { Injectable } from '@angular/core';
import { AuditStoreService } from './audit-store.service';
import { Observable } from 'rxjs';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuditInterceptorService implements HttpInterceptor {
  
  private token = '';
  constructor(private auditStore: AuditStoreService) {
  
  }
  
  public intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
     this.auditStore.dispatch('url:'+req.url+' method:' + req.method);
     console.log("Entra interceptor");
      ///TODO. Suscribe()?
      return next.handle(req);
  }
}
