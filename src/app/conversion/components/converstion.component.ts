import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataService } from '../../shared/services/data.service';
import { Result } from '../models/result';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
})
export class ConversionComponent implements OnInit {
  dataSource: MatTableDataSource<Result>;
  results: Result[];
  form: FormGroup;
  displayedColumns: string[] = ['distance', 'time'];

  kmDistances: number[] = [1, 5, 8, 10, 15, 20, 40, 50];
  miDistance: number[] = [1, 2, 4, 5, 8, 10, 13.1, 15, 20, 26.2];

  @ViewChild(MatSort) sort: MatSort;

  constructor(public data: DataService, private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource<Result>();

    this.form = this.fb.group({
      distance: [''],
      units: ['mi', Validators.required],
      minutes: ['', Validators.required],
      seconds: ['', [Validators.min(0), Validators.max(60)]],
    });
  }

  ngOnInit(): void {
    this.data.setTitle('Running Conversion');
  }

  handleSubmit(): void {
    this.results = [];
    const minutes: number = this.form.controls.minutes.value;
    const seconds: number = this.form.controls.seconds.value;

    if (!this.form.controls.distance.value) {
      this.setDefaultValues(minutes, seconds);
    }
  }
  number;

  setDefaultValues(minutes: number, seconds: number): void {
    const values: number[] =
      'mi' === this.form.controls.units.value
        ? this.miDistance
        : this.kmDistances;

    values.forEach((distance: number) => {
      this.results.push({
        distance,
        minutes,
        seconds,
      });
    });

    this.dataSource.data = this.results;
    setTimeout(() => (this.dataSource.sort = this.sort), 0);
  }

  getName(el: Result): string {
    return 'mi' === this.form.controls.units.value
      ? `${el.distance} mi`
      : `${el.distance} km`;
  }
}
