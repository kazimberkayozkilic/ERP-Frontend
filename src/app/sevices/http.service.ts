import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../constants';
import { ResultModel } from '../models/result.mode';
import { AuthServiceService } from './auth-service.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private auth: AuthServiceService,
    private error: ErrorService
  ) { }

  post<T>(apiUrl:string, body:any, callBack:(res:T)=> void,errorCallBack?:()=> void ){
    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`,body,{
      headers: {
        "Authorization": "Bearer " + this.auth.token
      }
    }).subscribe({
      next: (res)=> {
        if(res.data){
          callBack(res.data);
          console.log("Token:", this.auth.token);
        }
      },
      error: (err:HttpErrorResponse)=> {
        this.error.errorHandler(err);

        if(errorCallBack){
          errorCallBack();
        }
      }
    })
  }
}
