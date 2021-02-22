import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-brambilla';
}
Send(indirizzo : HTMLInputElement, oggetto : HTMLInputElement, messaggio : HTMLInputElement) : boolean{
let i = indirizzo.value;
let o = oggetto.value;
let n = messaggio.value;

  for (let i = 0; i < n; i++){
      this.articles.push(t)
  }
   return false;
  }
}