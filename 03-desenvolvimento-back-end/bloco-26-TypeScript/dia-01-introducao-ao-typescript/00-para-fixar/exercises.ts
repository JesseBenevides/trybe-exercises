export function greeter(name: string) {
  return `Olá, ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(diagol1: number, diagol2: number): number {
  return (diagol1 * diagol2) / 2;
}

export function trapezium(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2;
}

export function circle(radius: number): number {
  const PI = 3.14;
  return (radius ** 2) * PI;
}
