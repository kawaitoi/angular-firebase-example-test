import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
// 追加
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // 追加
    ReactiveFormsModule, // 追加
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: REGION, useValue: 'asia-northeast1' }
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule { }
