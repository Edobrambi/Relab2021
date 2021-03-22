export class Post {
    name: string;
    text: string;
    like: number;
    constructor(name: string, text: string, like?: number ) { 
        this.name = name;
        this.text = text; 
        this.like = like || 0;
    }
    addLike(): void {
        this.like += 1;
      }
    
     

    
}