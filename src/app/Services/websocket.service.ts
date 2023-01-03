import { Injectable } from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {Observable} from "rxjs";
import {Clock} from "../Models/clock";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  baseUrl: string = "ws://localhost:5074/WebSocket"

  constructor() { }


  testWebSocket() {
    return new Observable<Clock>(observable => {
      const clockWebsocket = webSocket(this.baseUrl);

      clockWebsocket.subscribe(data => {
        // @ts-ignore
        observable.next(new Clock(data.currentTime));
      });
    });
  }

  testTetstestt() {

  }
}
