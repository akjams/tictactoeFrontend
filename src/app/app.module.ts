import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './play-game.component';
import { GameService } from './game.service';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { MyGamesComponent } from './mygames.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayGameComponent,
    HomeComponent,
    MyGamesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
        RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'mygames',
        component: MyGamesComponent
      },
      {
        path: 'playgame/:id',
        component: PlayGameComponent
      },
      { path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
