/*import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class DataserviceService {
    constructor(private http: Http) {
        console.log("Data service connected....")
     }

    getAll() {
        return this.http.get('http://localhost:64493/api/Default',this.jwt()).map((response: Response) => response.json());
    }
    create(model:any) {
            return this.http.post('http://localhost:64493/api/Default',model,this.jwt()).map((response: Response) => response.json());
        }

    update(model:any) {
        return this.http.put('http://localhost:64493/api/Default', model, this.jwt()).map((response: Response) => response.json());
    }

    /*delete(id:any) {
        return this.http.delete('http://localhost:64493/api/Member'+id, this.jwt()).map((response: Response) => response.json());
    }


    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}*/



import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataserviceService {

    constructor(private http: Http) {
        console.log('Data Service Connected...');
    }

    url = "http://localhost:64493/api/Default/";

    //get method
    getAll() {
        return this.http.get('http://localhost:64493/api/Default')
            .map(response => response.json());
    }

    //post method 
    create(member: any) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:64493/api/Default', JSON.stringify(member), options)
            .map(res => res.json());
    }

//get the particular record for updation
  update(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //debugger;
        return this.http.put(this.url + user.id, JSON.stringify(user), { headers: headers })
            .map((res) => {
                return;
            });
    }
   
//record delete by id
    delete(id: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url+'/' + id, options)
            .map((res: Response) => res.json());
    }

  updateUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //debugger;
        return this.http.put(this.url + user.id, JSON.stringify(user), { headers: headers })
            .map((res) => {
                return;
            });
    }

    //temp
    deleteUser(id: number) {
        return this.http.delete(this.url + id)
            .map((res) => {
                return;
            });

    }

}
