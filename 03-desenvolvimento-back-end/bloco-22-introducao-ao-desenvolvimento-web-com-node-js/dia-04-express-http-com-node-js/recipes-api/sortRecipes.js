function sortRecipesByName(recipeList) {
  const sortedRecipes = recipeList.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return sortedRecipes;
}

module.exports = { sortRecipesByName };
