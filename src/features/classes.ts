/*

class robot {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}
 
I can also use a shortcut notation, which is a shortcut */

class robot {
  constructor(public color: string) {}

  //or for private, protected
  //constructor(public color: string, private tag: string, protected blaBla: string ) {}
}
