import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { ErrorHandler } from '../classes/error-handler';

const baseURL= "http://localhost:8080/api/drinks";

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private httpClient: HttpClient) { }

  save(input : any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type' : 'application/json'
      })
    };

    return this.httpClient.post<any>(baseURL, input, httpOptions).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  getAllDrinks(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type' : 'application/json'
      })
    };

    return this.httpClient.get<any>(baseURL, httpOptions).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  deleteDrinkById(id: any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(baseURL + id);
    return this.httpClient.delete<any>(baseURL +"/"+ id, httpOptions).pipe(
      map((response : any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

}
