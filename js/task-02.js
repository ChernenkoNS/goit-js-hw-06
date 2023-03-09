const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsArr = []
const ingredientTitle = document.getElementById('ingredients')
console.log(ingredientTitle);

for(let i = 0; i < ingredients.length; i +=1) {
  const ingredientsItim = document.createElement('li')
  ingredientsItim.textContent = ingredients[i]
  ingredientsArr.push(ingredientsItim)
};

ingredientTitle.append(...ingredientsArr)
