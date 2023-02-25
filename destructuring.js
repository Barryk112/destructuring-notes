/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [32, 23, 45];

//let john = ages[0];
//let mary = ages[1];
//let joseph = ages[2];

let [john, ary, joseph] = ages;
console.log(john, mary, joseph);

// Destructuring objects
let jobs = {
    barry: "builder",
    katie: "dog walker",
    joe: "garda"
}

let { barry, katie, joe } = jobs;
console.log(barry, katie, joe);

// Destructuring subsets
let languages = [english, french, spanish, german, japanese];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [ , , maryNative, marySecondary];
console.log(maryNative, marySecondary);


let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "german"
}

let { firstLanguage,thirdLanguage } = languages2;
console.log(firstLanguage, secondLanguage);

// Using rest parameter syntax#
let fruit = [apple, orenge, pear, banana, cherry];
let [favorite, secondFavorite, ...rest] = fruit;
console.log(favorite);
console.log(secondFavorite);
console.log(rest);

let favoriteFoods = {
    brian: "pizza",
    gerry: "pasta",
    holly: "fish",
    derry: "bread"
}

let { brian, gerry, ...rest } = favoriteFoods;
console.log(brain);
console.log(gerry);
console.log(rest); 