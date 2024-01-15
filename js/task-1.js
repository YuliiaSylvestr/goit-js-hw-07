const categoriesList = document.querySelector("#categories");
const categoriesLength = categoriesList.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const itemsElement = categoriesList.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
