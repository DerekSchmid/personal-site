import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  alive: boolean = true;

  constructor(public data: DataService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.data.title$.pipe(takeWhile(() => this.alive)).subscribe(value => {
      this.title = value;
      this.cd.detectChanges();
    });

    this.data.title$.next('Dev Site');
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
