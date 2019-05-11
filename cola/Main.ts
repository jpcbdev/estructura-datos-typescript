// Se inserta por el final y se saca por el inicio

import { Cola } from "./Cola";
import { Nodo } from "./Nodo";

let cola: Cola = new Cola();

cola.agregarNodo(new Nodo("Hola mundo"));
cola.agregarNodo(new Nodo("Hola mundo"));

cola.removerNodo();
cola.removerNodo();

// cola.removerNodo();
// cola.removerNodo();
// cola.removerNodo();
// cola.removerNodo();
// cola.removerNodo();


cola.mostrarUltimo();
// cola.agregarNodo(new Nodo("Hola como estas"));
// cola.agregarNodo(new Nodo("How are you?"));
// cola.agregarNodo(new Nodo("fala galera!"));

// cola.mostrarUltimo();
// cola.removerNodo();
// cola.mostrarPrimero();

