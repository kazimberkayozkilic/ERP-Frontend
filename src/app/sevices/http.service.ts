import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  post<T>(apiUrl:string, body:any, callBack:(res:T)=>void, errorCallBack?:()=> void){
    this.http.post<T>(`${api}/${apiUrl}`, body,{
      headers: {
        "Authorization": "Bearer " + "token"
      }
    }).subscribe({
        next: (res)=> {
          callBack(res);
        },
        error: (err:HttpErrorResponse)=>{
          if(errorCallBack){
            errorCallBack();
          }
        }
      })
  }
}
