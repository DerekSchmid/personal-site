import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  public title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setTitle(value: string): void {
    this.title$.next(value);
  }
}
