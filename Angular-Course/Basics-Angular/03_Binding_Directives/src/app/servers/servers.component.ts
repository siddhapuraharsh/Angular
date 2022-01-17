import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No New Server Created...!';
  serverName = '';
  serverCreated = false;

  servers = ['TestServer-1','TestServer-2'];
  
  username = '';

  showSecret = false;
  log = [];
  onToggleDetails()
  {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }


  constructor() 
  {
     setTimeout(() => {
       this.allowNewServer = true;
     }, 2000);
  }

  ngOnInit(): void 
  {

  }

  onCreateServer()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'New Server Created...! Server Name is : '+ this.serverName;
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
