import Recipes from "../../Models/Recipes";

export default interface IRecipesService {
    getAllRecipes(): Promise<Recipes[]>;
    getRecipeById(id: Number): Promise<Recipes | null>;
}