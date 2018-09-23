import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { configFirebase } from '../environments/prod.firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(configFirebase),
    AngularFirestoreModule,
    ReactiveFormsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
