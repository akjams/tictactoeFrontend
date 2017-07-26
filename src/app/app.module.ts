import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './play-game.component';
import { GameService } from './game.service';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { MyGamesComponent } from './mygames.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayGameComponent,
    HomeComponent,
    MyGamesComponent
  ],
  imports: [
    BrowserModule,
        RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'mygames',
        component: MyGamesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
