import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService<T> {

  constructor(private http: HttpClient , @Inject(String) public url: string) { }

  get():Observable<T>{
    return this.http.get<T>(this.url);
  }
  post(body: T): Observable<T> {
    return this.http.post<T>(this.url, body);
  }
  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`);
  }
  getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }
  update(id: any, body: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${this.url}/${id}`, body);
  }


}
