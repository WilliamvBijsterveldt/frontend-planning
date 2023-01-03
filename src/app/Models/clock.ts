export class Clock {

  constructor(currentTime: string) {
    this.currentTime =  new Date(currentTime);
  }

  currentTime: Date;
}
