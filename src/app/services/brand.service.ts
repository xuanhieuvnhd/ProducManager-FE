// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  API='http://localhost:8080/brand';
  constructor(private httpClient:HttpClient) { }
  findAll(): Observable<any> {
    return this.httpClient.get(this.API);
  }
}
