export class Nodo {

    private palabra: String
    private siguiente: Nodo

    constructor(palabra: String) {
        this.palabra = palabra;
        this.siguiente = null;
    }

    public setPalabra(palabra: String) {
        this.palabra = palabra;
    }

    public getPalabra(): String {
        return this.palabra;
    }

    public setSiguiente(siguiente: Nodo): void {
        this.siguiente = siguiente;
    }

    public getSiguiente(): Nodo {
        return this.siguiente;
    }


}