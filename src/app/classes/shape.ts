import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  protected getArea(a: number, b?: number): number {
    return a * (b ?? a);
  }

  protected getPerimeter(a: number, b?: number): number {
    return 2 * (a + (b ?? 0));
  }
}