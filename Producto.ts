export class Producto {
  constructor(public nombre: string, private precio: number) {}

  calcularTotal(cantidad: number): number {
    return this.precio * cantidad;
  }
}
