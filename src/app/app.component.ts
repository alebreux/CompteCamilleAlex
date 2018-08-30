import { Component } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private db: AngularFirestore
  ){
    const refToDemo = db.collection('demo')
    // refToDemo.add(( test: 'salut'));
    refToDemo.valueChanges().subscribe(value => console.log(value));
    console.log(db);
  }
}
