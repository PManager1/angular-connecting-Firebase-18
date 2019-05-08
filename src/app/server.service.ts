import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { database, initializeApp } from 'firebase'; 

@Injectable() 
export class ServerService {
    constructor(private http:Http ){}

    storeServers(servers: any[]){
        return this.http.post('https://ng-test-a84d6.firebaseio.com/data.json', servers); 
    }

}
