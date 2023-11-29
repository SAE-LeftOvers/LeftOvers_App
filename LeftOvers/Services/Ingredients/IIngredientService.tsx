import Ingredient from "../../Models/Ingredient";

export default interface IIngredientService {
    getAllIngredient(): Promise<Ingredient[]>;
    getIngredientById(id: number): Promise<Ingredient | null>;
    getIngredientByLetter(id: string): Promise<Ingredient[]>;
    getfilteredIngredient(prompt: string): Promise<Ingredient[]>;
}