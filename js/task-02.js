const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
('use strict');

let ulList = document.getElementById('ingredients');
const foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement('li');
  items.innerHTML = ingredient;
  ulList.append(items);
  parent.append(...items);
});

console.log(foodIngredients);
