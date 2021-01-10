import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber, Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private url="http://localhost:53226/api/";
  constructor(private http:HttpClient) { }
    
getusers():Observable<Customer[]>{
return this.http.get<Customer[]>(this.url+"GetUsers");
   }

}
