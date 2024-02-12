import { Shape } from './shape';

export class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    area(): number {
      return super.getArea(this.width, this.height);
    }
  
    perimeter(): number {
      return super.getPerimeter(this.width, this.height);
    }
  }