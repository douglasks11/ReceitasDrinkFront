import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { ErrorHandler } from '../classes/error-handler';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private httpClient: HttpClient) {
    environment;
  }

  save(input: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(environment.drinkApiUrl, input, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  giveLike(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'application/json'
      })
    };

    return this.httpClient.post<any>(environment.drinkApiUrl + "/give-like/" + id, httpOptions).pipe(
      map((response: any) => {
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  getAllDrinks() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'application/json'
      })
    };

    return this.httpClient.get<any>(environment.drinkApiUrl, httpOptions).pipe(
      map((response: any) => {
        return response.content;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  deleteDrinkById(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(environment.drinkApiUrl + id);
    return this.httpClient.delete<any>(environment.drinkApiUrl + "/" + id, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

  getDrinkByid(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    console.log(environment.drinkApiUrl +"/"+ id);
    return this.httpClient.get<any>(environment.drinkApiUrl + "/" + id, httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(ErrorHandler.handlerError)
    )
  }

}
