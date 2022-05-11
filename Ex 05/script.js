// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let allNumList = []
let sumNum = 0

// avvio un ciclo while con condizione sum < 50 per generare i prompt

while (sumNum < 50) {

    let num = parseInt(prompt("Inserisci un addendo"));

    allNumList.push(num);

    sumNum += num;
    
}

document.getElementById("sum_output").innerHTML = " Hai esagerato! I numeri inseriti sono: " + allNumList + ", il totale è: " + sumNum + ", ora però lo sforzo è troppo. Attendi un update per numeri superiori.";

console.log("I numeri sono: " + allNumList);

console.log("La somma è: " + sumNum);