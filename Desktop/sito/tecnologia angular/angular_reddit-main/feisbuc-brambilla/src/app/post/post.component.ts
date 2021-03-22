import { Component, OnInit, HostBinding, Input  } from '@angular/core';
import { Post } from './post.model';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card mt-4';
  name: string;
  text: string;
  
  @Input() post: Post;
  constructor() {
    this.post = new Post('gino', 'tanto va la gatta al lardo che ci lascia lo zampino',10);
   }
   addLike():boolean{
     this.post.addLike();
     return false;
   }
  ngOnInit(): void {
  }

}
