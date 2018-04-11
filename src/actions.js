// Recipes =================

export const populateRecipes = (recipes) => ({
  type: 'POPULATE_RECIPES',
  recipes
})

// Ingredients =============

export const populateIngredients = (ingredients) => ({
  type: 'POPULATE_INGREDIENTS',
  ingredients
})

// Filter ==================

export const addIngredientFilter = ingredient => ({
  type: 'ADD_INGREDIENT_FILTER',
  ingredient
})

export const removeIngredientFilter = id => ({
  type: 'REMOVE_INGREDIENT_FILTER',
  id
})