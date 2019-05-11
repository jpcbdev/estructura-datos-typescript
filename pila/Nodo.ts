export class Nodo {
    
    private dato:Number;
    private anterior:Nodo;

    constructor (dato:Number) {
        this.dato = dato;
        this.anterior = null;
    }

    public setDato(dato:Number):void {
          this.dato = dato;
    }

    public setAnterior(nodo:Nodo):void {
        this.anterior = nodo;
    }

    public getDato () : Number {
        return this.dato;
    }

    public getAnterior():Nodo {
        return this.anterior;
    }
}