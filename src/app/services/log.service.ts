import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 16:54:23')},
      {id: '3', text: 'Add logs components', date: new Date('12/28/2017 11:54:23')}
    ]
   }
//metoda getLogs

   getLogs() {
     return this.logs;
   }
}
