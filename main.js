/*
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

'use strict';

const lista = [
  'pasta',
  'pane',
  'uova',
  'carne',
  'mele',
  'pere',
  'formaggio',
  'latte',
  'pollo',
];

console.log(lista);

let i = 0;

while (i < lista.length) {
  console.log(lista[i]);
  i++;
}
