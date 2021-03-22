import { Component } from '@angular/core';
import{ Post } from './post/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feisbuc-brambilla';
  posts:Post[];
  constructor(){
    this.posts = []
  }
  addPost(name: HTMLInputElement, text: HTMLInputElement): boolean {
    this.posts.push(new Post(name.value, text.value));
    console.log(this.posts);
    name.value = '';
    text.value = '';
    return false;

  }
}
