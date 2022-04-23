import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewSeerver = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Pitju szerver';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewSeerver = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `A szerver neve: ${this.serverName}`;
  }
}
