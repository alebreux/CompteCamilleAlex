import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';

enum PayePar {
  CAMILLE = 'camille',
  ALEX = 'alex',
}
enum Pour {
  CAMILLE = 'camille',
  ALEX = 'alex',
  LES_DEUX = 'lesdeux',
}

class Entree {
  montant: number;
  date: Date;
  desc: string;
  payePar: PayePar;
  pour: Pour;
}

@Injectable({
  providedIn: 'root'
})
export class EntreeService {
  entreeCollection = this.angularFirestore.collection<Entree>('Entree');
  constructor(
    private angularFirestore: AngularFirestore
  ) {}

  addEntry$(entree: Entree): Observable<any> {
    return fromPromise(this.entreeCollection.add(entree));
  }

}
