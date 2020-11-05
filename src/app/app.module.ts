import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { LevelComponent } from './level/level.component';
import { QuestoesComponent } from './questoes/questoes.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    LevelComponent,
    QuestoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
