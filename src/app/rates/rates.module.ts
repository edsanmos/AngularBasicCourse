import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObseratesComponent } from './obserates/obserates.component';
import { AuditInterceptorService } from './audit-interceptor.service';

@NgModule({
  declarations: [RatesComponent, ObseratesComponent],
  imports: [
    CommonModule,
    RatesRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi:true
    }
  ]
})
export class RatesModule { }
