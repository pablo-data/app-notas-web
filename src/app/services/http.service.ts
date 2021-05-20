import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Tareas} from './../interfaces/tareas';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public base_url="http://127.0.0.1:3000/";

  constructor(private httpClient: HttpClient) { 
  }

  public get(){
    return this.httpClient.get<Tareas[]>(this.base_url);
  }

  public post(nota: any){
    return this.httpClient.post(this.base_url, nota);
  }


}
