import { Injectable } from '@angular/core';
import { product } from './Module/prod';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSrvcService {

public prodList:string[] = ["p1","p2","p3"];

public productList:product[] = [
 {
    prodId:10,
    proName:"Shampoo",
    price:23,
    qualityAvl:244,
    size:"L",
    discount:14
  },
  {
    prodId:11,
    proName:"Soap",
    price:10,
    qualityAvl:245,
    size:"S",
    discount:56
  },
  {
    prodId:18,
    proName:"Washing Powder",
    price:98,
    qualityAvl:123,
    size:"M",
    discount:20
  }

]

  constructor( private http:HttpClient ) { }

public convertString(val:number):string {
  return val.toString();
}

public getUser(usId?:string):Observable<any>{

const hdrs = new HttpHeaders()
.set('content-type','application/json')
.set('Access-Control-Allow-Origin','*');
const para = new HttpParams()

if(usId != undefined){

let para = new HttpParams().append('id',usId);

return this.http.get("https://gorest.co.in/public/v2/users", {headers:hdrs, params:para});

}

else{

  return this.http.get("https://gorest.co.in/public/v2/users", {headers:hdrs, params:para});

}
}


public addUser(userObj: any):Observable<any>{

  const hdrs = new HttpHeaders()
  .set('content-type','application/json')
  .set('Access-Control-Allow-Origin','*');


let bodyData = JSON.stringify(userObj);

return this.http.post('https://reqres.in/api/users', bodyData, {headers:hdrs});

}


}
