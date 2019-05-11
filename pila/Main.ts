//  El ultimo en entrar siempre sera el primero en salir

import { Pila } from "./Pila";
import { Nodo } from "./Nodo";

const pila: Pila = new Pila();

pila.agregarNodo(new Nodo(20));
pila.agregarNodo(new Nodo(56));
pila.agregarNodo(new Nodo(5));
pila.agregarNodo(new Nodo(50));

pila.eliminarCima(); // => Elimina el nodo con el numero 50
pila.eliminarCima(); // => Elimina el nodo con el numero 5
pila.eliminarCima(); // => Elimina el nodo con el numero 56
// pila.eliminarCima(); // => Elimina el nodo con el numero 20


pila.mostrarCima()  // => Muestra el nodo cima con el numero 56

pila.recorrerNodos(); // => Recorremos los nodos restantes 56 y 20

