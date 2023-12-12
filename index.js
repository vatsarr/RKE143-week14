const containerElement = document.querySelector(".container");

async function getRandomRecipe() {
    const response = await fetch("https://week11-k9j3.onrender.com/random");
    const data = await response.json();
    const recipeData = data.recipe;

    const recipeName = recipeData.recipename;
    const recipeImageUrl = recipeData.imageurl;
    const recipeInstructions = recipeData.instructions;

    const ingredientsArray = data.ingredients;

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerHTML = recipeName;

    const recipeImage = document.createElement("img");
    recipeImage.src = recipeImageUrl;

    const instructionsBlock = document.createElement("p");
    instructionsBlock.innerHTML = recipeInstructions;

    const ingredientList = document.createElement("ul");
    ingredientsArray.forEach((ingredient) => {
        const ingredientLiElement = document.createElement("li");
        ingredientLiElement.innerHTML = ingredient;
        ingredientList.appendChild(ingredientLiElement);
    });

    containerElement.appendChild(recipeTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientList);
    containerElement.appendChild(instructionsBlock);
}

getRandomRecipe();
