const shoppingList = [
    "latte", // 0
    "biscotti", // 1
    "pasta",  // 2
    "formaggio" // 3
];

let i = 0;

const listElem = document.querySelector('.list');
console.log(listElem);
while (i < shoppingList.length) {
    const item = shoppingList[i];
    console.log(item);
    const li = document.createElement('li');
    li.innerHTML = item;
    listElem.append(li);
    i++;
}





// creo array shoppingList

// imposto le variabili per il ciclo while

// creo ciclo while in modo che vada a prendere le stringhe dentro l'array  -- INCREMENTO

// prendo le stringhe dentro l'array e stampo in pagina