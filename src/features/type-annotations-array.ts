/** type annotation for array */
const names: string[] = ['anna', 'giova'];

/** type annotation for arrays of arrays, I am telling that this array will contains array of string */

const arrayOfNames: string[][] = [names, names];

/** */
const firstLetterUpper = (name: string): string => {
  // here I will get autocomplete for string obj
  const first = name.substr(0, 1).toLocaleUpperCase();
  return `${first}name.substr(1)`;
};

// here typescript can inference that we ll return an array of string
const namesUppper = names.map(firstLetterUpper);

// different values?
const namesAndbirthdate: (string | Date)[] = ['Adam', new Date()];

/* Tuples
 A tuple is a way of represesenting different properties of an object using an array structure.
 A use-case might be importing values from a .csv file but in general they are not used.

ex: Drink {
  color: orange,
  name: orangine,
  sparkling: true
}

I can represent this dring as follow [[orange, orangine, true]]
In order to do so, since I am loosing the informations of the labels, 
I have to set a rule that will extract the values in the right order to keep the mapping
*/

const drink = {
  color: 'orange',
  name: 'orangine',
  sparkling: true,
};

// what is happening here is that typescript has lost the important information of the order
const drinkAsTuple = [drink.color, drink.name, drink.sparkling];

// let's solve that: now I kept the order type and I aslo say that this array have to contain 3 elements
// instead of defining which type my array may contains, we are defining type alias
const drinkProperTuple: [string, string, boolean] = [
  drink.color,
  drink.name,
  drink.sparkling,
];

// to make this type alias reusable I can do a different thing
type Drink = [string, string, boolean];
const reusableDrink: Drink = [drink.color, drink.name, drink.sparkling];
