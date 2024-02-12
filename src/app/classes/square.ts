import { Shape } from './shape';

export class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return super.getArea(this.side);
  }

  perimeter(): number {
    return super.getPerimeter(this.side);
  }
}