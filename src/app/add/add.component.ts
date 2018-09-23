import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      montant: ['', Validators.required],
      date: [moment().format('YYYY-MM-DD'), Validators.required],
      desc: ['', Validators.required],
      payePar: ['', Validators.required],
      pour: ['', Validators.required],
    });
    this.form.valueChanges.subscribe(value => console.log(this.form.valid, value));
  }

  validate(): void {
    console.log(this.form.value);
}

}
