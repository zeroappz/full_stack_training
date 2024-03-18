import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  // getItems()
  getItems(url: string): Observable<any>{
    const result = this.http.get<any>(url).pipe(
      catchError(this.handleError('getItems', [])),
    );
    return result;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error.message);
      return of(result as T);
    };
  }
}
