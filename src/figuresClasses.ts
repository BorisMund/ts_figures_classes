export interface Figure {
  color: string;
  getArea(): number;
  shape: string;
}

export class Triangle implements Figure {
  color: string;
  a: number;
  b: number;
  c: number;
  shape: string = 'triangle';
  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("'your error message'");
    }
  }
  getArea(): number {
    let perimetr = (this.a + this.b + this.c) / 2;
    let square = Math.sqrt(
      perimetr *
        (perimetr - this.a) *
        (perimetr - this.b) *
        (perimetr - this.c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  color: string;
  radius: number;
  shape: string = 'circle';

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }
  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;
  width: number;
  height: number;
  shape: string = 'rectangle';

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }
  getArea(): number {
    let res = this.width * this.height;

    return Math.floor(res * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
