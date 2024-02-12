import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Shape } from '../../classes/shape';
import { Square } from '../../classes/square';
import { Rectangle } from '../../classes/rectangle';


@Component({
  selector: 'app-shape',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.scss'
})

export class ShapeComponent implements OnInit {
  shapes: Shape[] = [];
  squareSide: number | null = null;
  rectangleWidth: number | null = null;
  rectangleHeight: number | null = null;

  ngOnInit() {}

  addSquare() {
    if (this.squareSide !== null) {
      const square = new Square(this.squareSide);
      this.shapes.push(square);
      this.squareSide = null; // Clear input after adding
    }
  }

  addRectangle() {
    if (this.rectangleWidth !== null && this.rectangleHeight !== null) {
      const rectangle = new Rectangle(this.rectangleWidth, this.rectangleHeight);
      this.shapes.push(rectangle);
      this.rectangleWidth = null;
      this.rectangleHeight = null; // Clear inputs after adding
    }
  }

  getShapeType(shape: Shape): string {
    return shape instanceof Square ? 'Square' : 'Rectangle';
  }

  isSquare(shape: Shape): boolean {
    return shape instanceof Square;
  }

  isRectangle(shape: Shape): boolean {
    return shape instanceof Rectangle;
  }
}
