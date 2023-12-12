import axios from 'axios';
import IRecipesService from "./IRecipesServices";
import Recipes from "../../Models/Recipes";

export default class RecipesService implements IRecipesService {
    private readonly API_URL = "http://leftovers.alwaysdata.net/recipes";
    private readonly IA_URL = "https://codefirst.iut.uca.fr/containers/Sae_LeftOvers-leftovers_ia"

    async getAllRecipes(): Promise<Recipes[]> {
        try {
            const response = await axios.get(this.API_URL);
            return response.data as Recipes[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des recettes dans getAllRecipes: ' + error.message);
        }
    }


    async getRecipeById(id: number): Promise<Recipes | null>{
        try {
            const response = await axios.get(`${this.API_URL}/${id}`);
            return response.data as Recipes;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des recettes dans getRecipeById : ' + error.message);
        }
    }
    
    async getRecipeWithIngredients(ids: string[]): Promise<Recipes[]>{
        try {
            const response = await axios.get(`${this.IA_URL}/getrecipes/${ids}`);
            return response.data as Recipes[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des recettes dans getRecipeWithIngredients : ' + error.message);
        }
    }

    async getRecipeWithIngredientsAndFilters(ids: string[], filters: string[]): Promise<Recipes[]> {
        try {
            const response = await axios.get(`${this.IA_URL}/getrecipeswithfilters/${ids}/${filters}`);
            return response.data as Recipes[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des recettes dans getRecipeWithIngredients : ' + error.message);
        }
    }
}
