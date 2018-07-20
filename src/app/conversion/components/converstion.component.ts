import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
})
export class ConversionComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      distance: ['', Validators.required],
      units: ['mi', Validators.required],
      minutes: ['', Validators.required],
      seconds: ['', [Validators.min(0), Validators.max(60)]],
    });
  }

  handleSubmit(): void {
    console.log(this.form.value);
  }
}
