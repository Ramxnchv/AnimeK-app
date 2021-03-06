import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { AnimePageComponent } from './anime-page/anime-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path:'index', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'signin', component:SigninComponent},
  {path:'anime-page', component:AnimePageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    SigninComponent,
    AnimePageComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
