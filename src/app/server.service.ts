import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// import 'rxjs/Rx'; 
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable() 
export class ServerService {
    constructor(private http:Http ){}

    // storeServers(servers: any[]){
    //     return this.http.post('https://ng-test-a84d6.firebaseio.com/data.json', servers); 
    // }

    storeServers(servers: any[]){
        return this.http.put('https://ng-test-a84d6.firebaseio.com/data.json', servers); 
    }

    getServers(){
        return this.http.get('https://ng-test-a84d6.firebaseio.com/data.json')
        .map(
            (response: Response ) => {
                const data = response.json(); 
                return data; 
            }

        );  // will take the old ovservable and wrap the data we get back 
        // into some transform data and then wrap that transform data into 
        //  another observable. 
        //  so in the end we'll again get back another observable. 
    }

}

