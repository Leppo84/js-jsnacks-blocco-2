// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni

// creo l'array vuoto

let listNum =[];
let genNum;
let evenPrint = document.getElementById("list_output").innerHTML;

// avvio un ciclo while con condizione 10 lenght dove genero i numeri da 1 a 100

while (listNum.length < 10) {

    let genNum=Math.floor(Math.random()*100)+1;

        if (!listNum.includes(genNum)) {

            listNum.push(genNum);

            // genero gli output a schermo

            document.getElementById("list_output").innerHTML += `
            <li>${genNum}</li>`

        }

}

console.log("I numeri sono: " + listNum);

// aggiungo la data di oggi in italiano

const days = ["domenica", "lunedì", "Martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
const months = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
const myDate = new Date();

// giorno della settimana

let day = days[myDate.getDay()];
console.log(day);

// numero del mese

let dN = myDate.getDate();
console.log(dN);

// mese

let myMonth = months[myDate.getMonth()];
console.log(myMonth);

// anno

let myYear = myDate.getFullYear();
console.log(myYear);

const myToday = day + " " + dN + " " + myMonth + " " + myYear;

document.getElementById("today").innerHTML=myToday;
