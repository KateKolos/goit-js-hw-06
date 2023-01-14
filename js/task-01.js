const listItemsAmount = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: `, listItemsAmount.length);

const categoriesDetails = listItemsAmount.forEach((category) => {
  console.log(
    `Category: `,
    category.firstElementChild.textContent,
    "/",
    `Elements: `,
    category.querySelectorAll("li").length
  );
});
