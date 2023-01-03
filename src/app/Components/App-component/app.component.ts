import {Component} from '@angular/core';
import {WebsocketService} from "../../Services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend-planning';

  public currentTime: string;

  constructor(private webSocketService: WebsocketService) {

    this.webSocketTest();
  }

  webSocketTest() {
    this.webSocketService.testWebSocket().subscribe( data =>{
      // @ts-ignore
      this.currentTime = data.currentTime;
    });
  }
}
