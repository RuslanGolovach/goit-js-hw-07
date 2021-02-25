const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');

const categoriesQuantity = categoriesRef.children.length;

console.log(`В списке ${categoriesQuantity} категории.`);

itemsRef.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
