import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styles: []
})
export class SecretComponent implements OnInit {
  public operation$;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
  
  public send(){
    this.operation$ = this.httpClient.get('https://api-base.herokuapp.com/api/priv/operations');
  }

}
