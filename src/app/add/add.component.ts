import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { EntreeService } from '../entree.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  running = false;
  constructor(
    private fb: FormBuilder,
    private entreeService: EntreeService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      montant: ['', Validators.required],
      date: [moment().format('YYYY-MM-DD'), Validators.required],
      desc: ['', Validators.required],
      payePar: ['', Validators.required],
      pour: ['', Validators.required],
    });
  }

  validate(): void {
    const entree = {...this.form.value};
    entree.date = moment(entree.date, 'YYYY-MM-DD').toDate();
    this.running=true;
    this.entreeService.addEntry$(this.form.value).subscribe(() => {
        this.running = false;
        this.form.patchValue({
          montant: '',
          date: moment().format('YYYY-MM-DD'),
          desc: '',
          payePar: '',
          pour: '',
        })
      } );
  }

}
