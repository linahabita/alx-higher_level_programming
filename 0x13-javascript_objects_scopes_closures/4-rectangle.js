#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        // Validate w and h
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            // Create an empty object (width and height set to 0)
            this.width = 0;
            this.height = 0;
        }
    }

    print() {
        // Print the rectangle using 'X'
        for (let row = 0; row < this.height; row++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate() {
        // Exchange width and height
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        // Multiply width and height by 2
        this.width *= 2;
        this.height *= 2;
    }
}
module.exports = Rectangle;
