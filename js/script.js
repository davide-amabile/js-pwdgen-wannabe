// // chiedere il nome e creare una variabile
// var nome = prompt("Come ti chiami?");
// document.getElementById('name').innerHTML = nome;
// // chiedre il cognome e creare una variabile
// var cognome = prompt("Il tuo cognome?");
// document.getElementById('second-name').innerHTML = cognome;
// // chiedereil colore e creareuna variabile
// var colore = prompt("Colore preferito?")
// document.getElementById('color').innerHTML = colore + "19";

// creare le variabili

var name = prompt("Il tuo nome?");
var secondName = prompt("Il tuo cognome?");
var color = prompt("Il tuo colore preferito?");

// unica variabile

var password = name + secondName + color + "19";

// stampa su video

document.getElementById('titolo').innerHTML = password;
