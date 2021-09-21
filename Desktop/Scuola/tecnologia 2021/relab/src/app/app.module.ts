import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD5bemOS4JFsARPF0o-aJtbxa7-EbUX8Uc'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
