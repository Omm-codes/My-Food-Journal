
const searchBtn = document.getElementById("search-btn");
const searchBtnIngredient = document.getElementById("search-btn-ingredient");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");
const searchInput = document.getElementById("search-input");

let searchType = "i"; // Default search type is ingredient

// Event listeners
setupEventListeners();

// Setup all event listeners in one place
function setupEventListeners() {
  searchBtn.addEventListener("click", () => searchMeals("i"));
  searchBtnIngredient.addEventListener("click", () => searchMeals("a"));
  mealList.addEventListener("click", getMealRecipe);
  recipeCloseBtn.addEventListener("click", closeRecipeModal);

  // Add event listener for "Enter" key search
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchMeals(searchType);
  });
}

// Fetch the meal list based on the search type (ingredient or area)
async function searchMeals(type) {
  const searchInputTxt = searchInput.value.trim();
  if (!searchInputTxt) {
    alert("Please enter a search term!");
    return;
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${searchInputTxt}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMealList(data.meals);
  } catch (error) {
    console.error("Error fetching the meal data:", error);
    mealList.innerHTML = "<p>Sorry, an error occurred. Please try again later.</p>";
  }
}

// Display the list of meals or a "not found" message
function displayMealList(meals) {
  let html = "";
  if (meals) {
    meals.forEach((meal) => {
      html += `
        <div class="meal-item" data-id="${meal.idMeal}">
          <div class="meal-img">
            <img src="${meal.strMealThumb}" alt="food">
          </div>
          <div class="meal-name">
            <h3>${meal.strMeal}</h3>
            <a href="#" class="recipe-btn">Get Recipe</a>
          </div>
        </div>
      `;
    });
    mealList.classList.remove("notFound");
  } else {
    html = "<p>Sorry, we didn't find any meal!</p>";
    mealList.classList.add("notFound");
  }
  mealList.innerHTML = html;
}

// Fetch and display the recipe details in a modal
async function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    const mealItem = e.target.closest(".meal-item");
    const mealId = mealItem.dataset.id;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      displayMealRecipe(data.meals[0]);
    } catch (error) {
      console.error("Error fetching the recipe details:", error);
      mealDetailsContent.innerHTML = "<p>Sorry, failed to load the recipe. Please try again.</p>";
    }
  }
}

// Display the recipe modal
function displayMealRecipe(meal) {
  const html = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class="recipe-meal-img">
      <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
  `;
  mealDetailsContent.innerHTML = html;
  showRecipeModal();
}

// Show the recipe modal
function showRecipeModal() {
  mealDetailsContent.parentElement.classList.add("showRecipe");
}

// Close the recipe modal
function closeRecipeModal() {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
}
