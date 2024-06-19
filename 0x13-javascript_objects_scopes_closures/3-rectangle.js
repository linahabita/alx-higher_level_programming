#!/usr/bin/node
/* Define class Rectangle */
class Rectangle {
  /* constructor receives 2 arguments
  and validates if each argument is greater
  than zero */
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    /* instance method that prints the rectangle */
    for (let a = this.height; a > 0; a--) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
