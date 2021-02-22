import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provaSpammer';
  articles = new Array<string>();
  /*oppure 
  articles : string[];
  */
 addSpam(testo : HTMLInputElement, numero : HTMLInputElement ) : boolean {
  let t = testo.value; //qui prendo la scritta della casella di testo 
  let n = Number(numero.value); //qui prendo il numero di volte della casella di testo 
 
  for (let i = 0; i < n; i++){
    this.articles.push(t) // per mettere i valori nel vettore
  }
  return false // per evitare di ricaricare la pagina
 }
}
