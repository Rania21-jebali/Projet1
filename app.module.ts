import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './inscrire/signin.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { MarcheComponent } from './marche/marche.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PostulezComponent } from './postulez/postulez.component';
import { PostezComponent } from './postez/postez.component';
import { ProjetComponent } from './projet/projet.component';
import { BtnPostulerComponent } from './btn-postuler/btn-postuler.component';

const appRoutes: Routes = [
  { path: 'connecter', component:IdentifierComponent },
  { path: 'acceuil',      component:AcceuilComponent },
  { path: 'inscrire',      component:SigninComponent },
  { path: 'freelance',      component:FreelanceComponent },
  { path: 'marche',      component:MarcheComponent },
  { path: 'postulez',      component:PostulezComponent },
  { path: 'postez',      component:PostezComponent },
  { path: 'postulez/projet',      component:ProjetComponent },
  { path: 'postulez/projet/postuler',      component:BtnPostulerComponent }
]
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    IdentifierComponent,
    FreelanceComponent,
    MarcheComponent,
    AcceuilComponent,
    PostulezComponent,
    PostezComponent,
    ProjetComponent,
    BtnPostulerComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }