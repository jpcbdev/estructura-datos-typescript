import { Nodo } from "./Nodo";

export class Pila {
  private cima: Nodo;

  constructor() {
    this.cima = null;
  }

  public agregarNodo(nodo: Nodo): void {
    if (this.cima == null) {
      this.cima = nodo;
    } else {
      nodo.setAnterior(this.cima);
      this.cima = nodo;
    }
  }

  public mostrarCima(): void {
    if (this.cima != null) {
      console.log("La cima: " + this.cima.getDato());
    } else {
      console.log("La pila esta vacia");
    }

  }

  public recorrerNodos(): void {
    let temporal: Nodo = this.cima;

    while (temporal != null) {
      console.log("                   ,,,,");
      console.log(`                   |${temporal.getDato()}|`);
      console.log("                   ````");
      temporal = temporal.getAnterior();
    }
  }

  public eliminarCima(): void {
    let eliminar: Nodo;
    if (this.cima != null) {
      eliminar = this.cima;
      this.cima = this.cima.getAnterior();
      eliminar = null;
    }
  }
}
