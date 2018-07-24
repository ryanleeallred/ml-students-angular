import { RouterModule} from '@angular/router'
import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GetStudentsComponent } from './get-students/get-students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    GetStudentsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
        { path: '', component: StudentsComponent },
        { path: 'data', component: GetStudentsComponent},
        { path: ':nameString', component: ProfileComponent },
        { path: '**', component: NotFoundComponent }
        
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


