import RecipesService from '../Services/Recipes/RecipesServices';

describe('RecipesService', () => {
    const recipe_service = new RecipesService();

    it('should get one recipe', async () => {
        const result = await recipe_service.getRecipeById(4444)
        expect(result.id).toBe(4444);
    });

    it('should get all recipes', async () => {
        const result = await recipe_service.getAllRecipes()
        const test = result.length >= 1
        expect(test).toBe(true);
    }, 120000);

    it('should get one recipe', async () => {
        const result = await recipe_service.getRecipeWithIngredients(['1928:2148:2809:2853:3723:6261:6335:7076'])
        const test = result.length >= 1
        expect(test).toBe(true);
    });
});