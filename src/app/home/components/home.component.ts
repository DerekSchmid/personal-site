import { Component, OnInit } from '@angular/core';

import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.setTitle('Dev Site');
  }
}