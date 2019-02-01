import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title: 'Derek Schmid';
  alive = true;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.alive = false;
  }
}
