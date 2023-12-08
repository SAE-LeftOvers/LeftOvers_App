import IngredientService from '../Services/Ingredients/IngredientsServices';

describe('IngredientService', () => {
    const ingredient_service = new IngredientService();

    it('should get one ingredient', async () => {
        const ingredient_service = new IngredientService();
        const result = await ingredient_service.getIngredientById(1)
        expect(result.id).toBe(1);
    });
});