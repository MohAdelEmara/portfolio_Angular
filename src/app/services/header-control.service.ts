import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderControlService {

    private windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);

    windowWidth$ = this.windowWidthSubject.asObservable();

    constructor() {
      window.addEventListener('resize', () => {
        this.windowWidthSubject.next(window.innerWidth);
      });
    }

    getWindowWidth(): number {
      return window.innerWidth;
    }
  }
