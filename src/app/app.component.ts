import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { database, initializeApp } from 'firebase';
import { ServerService } from './server.service';
import { Response  } from '@angular/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private serverService: ServerService){ 

  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  // ServerService: any;
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServer(){
    this.serverService.storeServers(this.servers)
        .subscribe(
      (response)=>  console.log('41-  response =', response ), 
      (error) => console.log('43 error = ', error )
      ); 
  }

  onGetServers(){
    this.serverService.getServers()
      .subscribe(
        (response:Response ) => {
          const data = response.json(); 
          console.log (  ' 57 - get the data ', data )
      }, 
        (error) => console.log('55 error = ', error )
      );
  }
}
