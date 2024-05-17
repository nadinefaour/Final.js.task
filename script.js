const recipes = [
  {
    name: "Margherita Pizza",
    description:
      "Classic Margherita pizza with fresh tomatoes, mozzarella, and basil.",
    image: "Pizza.jpg",
    ingredients:
      "Pizza dough, Tomato sauce, Fresh mozzarella, Fresh basil, Olive oil, Salt",
  },
  {
    name: "Spaghetti Carbonara",
    description:
      "Creamy Italian pasta with eggs, cheese, pancetta, and pepper.",
    image: "Carbonara.jpg",
    ingredients: "Spaghetti, Eggs, Pecorino Romano, Pancetta, Black pepper",
  },
  {
    name: "Chicken Tikka Masala",
    description: "Spicy grilled chicken tikka in a creamy tomato sauce.",
    image: "tikka_masala.jpg",
    ingredients:
      "Chicken, Yogurt, Garlic, Ginger, Garam masala, Tomato sauce, Cream",
  },
  {
    name: "Caesar Salad",
    description:
      "Classic Caesar salad with romaine lettuce, croutons, and Parmesan cheese.",
    image: "caesar_salad.jpg",
    ingredients:
      "Romaine lettuce, Croutons, Parmesan cheese, Caesar dressing, Lemon juice, Garlic",
  },
  {
    name: "Sushi Rolls",
    description: "Assorted sushi rolls with fresh fish, vegetables, and rice.",
    image: "sushi.jpg",
    ingredients:
      "Sushi rice, Nori, Fresh fish, Avocado, Cucumber, Soy sauce, Wasabi",
  },
  {
    name: "Beef Tacos",
    description:
      "Mexican beef tacos with seasoned meat, fresh salsa, and toppings.",
    image: "tacos.jpg",
    ingredients:
      "Tortillas, Ground beef, Taco seasoning, Lettuce, Tomato, Cheese, Sour cream",
  },
];

function createCard(recipe, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.name;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h3");
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.textContent = recipe.description;

  const ingredients = document.createElement("p");
  ingredients.textContent = "Ingredients: " + recipe.ingredients;
  ingredients.classList.add("ingredients");
  ingredients.style.display = "none";

  const ingredientBtn = document.createElement("button");
  ingredientBtn.textContent = "Show Ingredients";
  ingredientBtn.classList.add("accordion");
  ingredientBtn.dataset.index = index;

  ingredientBtn.addEventListener("click", function () {
    ingredients.classList.toggle("active");
    if (ingredients.style.display === "none") {
      ingredients.style.display = "flex";
      ingredientBtn.textContent = "Hide Ingredients";
    } else {
      ingredients.style.display = "none";
      ingredientBtn.textContent = "Show Ingredients";
    }
  });

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(ingredientBtn);
  cardBody.appendChild(ingredients);

  card.appendChild(image);
  card.appendChild(cardBody);

  return card;
}

function displayRecipes() {
  const cardContainer = document.getElementById("cardContainer");
  recipes.forEach((recipe, index) => {
    const card = createCard(recipe, index);
    cardContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayRecipes);

function addIngredientField() {
  const ingredientsDiv = document.getElementById("ingredients-div");
  const newField = document.createElement("input");
  newField.type = "text";
  newField.name = "ingredients[]";
  newField.placeholder = "Ingredient";
  ingredientsDiv.appendChild(newField);
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;
  const ingredients = document.getElementsByName("ingredients[]");

  if (
    !name ||
    !email ||
    !description ||
    ingredients.length === 0 ||
    !ingredients[0].value
  ) {
    alert("Please fill out all fields.");
    return false;
  }

  return true;
}
const recipes2 = [
  document
    .getElementById("recipeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var recipeName = document.getElementById("recipeName").value;
      var description = document.getElementById("description").value;
      var ingredients = document.getElementById("ingredients").value;

      var cardContainer = document.getElementById("cardContainer");
      var recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.innerHTML = `
            <h2>${recipeName}</h2>
            <p><strong>By:</strong> ${name}</p>
            <p>${description}</p>
            <h3>Ingredients</h3>
            <p>${ingredients}</p>
            <p><strong>Contact:</strong> ${email}</p>
        `;

      cardContainer.appendChild(recipeCard);

      document.getElementById("recipeForm").reset();
    }),
];
