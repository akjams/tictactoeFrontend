import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayGameComponent } from './play-game.component';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
