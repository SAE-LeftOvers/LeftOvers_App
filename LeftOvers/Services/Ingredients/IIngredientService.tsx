import Ingredient from "../../Models/Ingredient";

export default interface IIngredientService {
    getAllIngredient(): Promise<Ingredient[]>;
    getIngredientById(id: Number): Promise<Ingredient | null>;
    getIngredientByLetter(id: String): Promise<any>;
}