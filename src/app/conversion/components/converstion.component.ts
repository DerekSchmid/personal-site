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
  units: string;

  get distance(): number {
    return this.form.controls.distance.value;
  }

  get minutes(): number {
    return this.form.controls.minutes.value;
  }

  get seconds(): number {
    return this.form.controls.seconds.value;
  }

  get totalSeconds(): number {
    return this.minutes * 60 + this.seconds;
  }

  kmDistances: number[] = [1, 5, 8, 10, 15, 20, 40, 50];
  miDistance: number[] = [1, 2, 4, 5, 8, 10, 13.1, 15, 20, 26.2];

  @ViewChild(MatSort) sort: MatSort;

  constructor(public data: DataService, private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource<Result>();

    this.form = this.fb.group({
      distance: ['', Validators.required],
      units: ['mi', Validators.required],
      minutes: ['', [Validators.required, Validators.min(0)]],
      seconds: ['', [Validators.min(0), Validators.max(60)]],
    });
  }

  ngOnInit(): void {
    this.data.setTitle('Running Conversion');
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.results = [];
      this.units = this.form.controls.units.value;

      this.setValues();
    }
  }

  setValues(): void {
    const values: number[] =
      'mi' === this.units ? this.miDistance : this.kmDistances;

    const baseTotal: number = this.totalSeconds / this.distance;

    values.forEach((distance: number) => {
      this.results.push({
        distance,
        minutes: this.getMinutes(baseTotal * distance),
        seconds: this.getSeconds(baseTotal * distance),
      });
    });

    this.dataSource.data = this.results;
    setTimeout(() => (this.dataSource.sort = this.sort), 0);
  }

  getMinutes(total: number): number {
    return Math.floor(total / 60);
  }

  getSeconds(total: number): number {
    return Math.floor((total / 60 - this.getMinutes(total)) * 60);
  }

  getName(el: Result): string {
    return 'mi' === this.units ? `${el.distance} mi` : `${el.distance} km`;
  }

  getMinuteDisplay(res: Result): string {
    return res.minutes.toFixed(0);
  }

  getSecondDisplay(res: Result): string {
    return res.seconds.toLocaleString('en-us', {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
    });
  }
}
