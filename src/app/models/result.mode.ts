export class ResultModel<T>{
  data?: T;
  errorMessages?: string[];
  isSuccesful: boolean = false;
}
