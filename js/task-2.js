const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const makeListIngredientsEl = elements => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    return listItem;
  });
};

const allIngredients = makeListIngredientsEl(ingredients);
ingredientsRef.append(...allIngredients);
