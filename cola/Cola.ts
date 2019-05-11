import { Nodo } from "./Nodo";

export class Cola {

    private primero: Nodo;
    private ultimo: Nodo;
    private elimina: Nodo;

    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.elimina = null;
    }

    public agregarNodo(nodo: Nodo): void {

        if (this.primero == null && this.ultimo == null) {
            this.primero = nodo;
            this.ultimo = nodo;
        } else {
            nodo.setSiguiente(null);
            this.ultimo.setSiguiente(nodo);
            this.ultimo = this.ultimo.getSiguiente();
        }
    }
    public removerNodo(): void {
        // let elimina: Nodo;
        if (this.primero == this.ultimo) {
            this.primero = null;
            this.ultimo = null;
        } else if (this.primero != null) {
            this.elimina = this.primero;
            this.primero = this.primero.getSiguiente();
            this.elimina = null;
        } else {
            console.log("La cola esta vacia");
        }
    }
    public mostrarPrimero(): void {
        if (this.primero != null) {
            console.log(`La primero palabra en la cola es: ${this.primero.getPalabra()}`);
        } else {
            console.log("La cola esta vacia");
        }
    }
    public mostrarUltimo(): void {
        if (this.ultimo != null) {
            console.log(`La ultima palabra en la cola es: ${this.ultimo.getPalabra()}`);
        } else {
            console.log("La cola esta vacia");
        }
    }
    
}