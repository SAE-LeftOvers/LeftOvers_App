import IngredientService from '../Services/Ingredients/IngredientsServices';

describe('IngredientService', () => {
    const ingredient_service = new IngredientService();

    it('should get one ingredient', async () => {
        const result = await ingredient_service.getIngredientById(1)
        expect(result.id).toBe(1);
    });

    it('should get all ingredients', async () => {
        const result = await ingredient_service.getAllIngredient()
        const test = result.length >= 1
        expect(test).toBe(true);
    });

    it('should return several ingredients starting by letter a', async () => {
        const result = await ingredient_service.getIngredientByLetter('a')
        let test = true
        for (let ingredient of result) {
            if (ingredient.name[0] !== 'a') {
                test = false
            }
        }
        expect(test).toBe(true);
    });

    it('should return several ingredients with car in the name', async () => {
        const result = await ingredient_service.getfilteredIngredient('car')
        let test = true
        for (let ingredient of result) {
            if (ingredient.name.includes('car')) {
                test = false
            }
        }
        expect(test).toBe(true);
    });
});