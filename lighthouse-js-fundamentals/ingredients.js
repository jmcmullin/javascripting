const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];



// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i ++;
}

// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
 console.log(ingredients[i]); 
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

function reverseArray(ingredients) {
    var reversed = "";
    for (var i = ingredients.length - 1; i >= 0; i--) {
      reversed += ingredients[i] + "\n";
    }
    return reversed;
}

console.log(reverseArray(ingredients));
