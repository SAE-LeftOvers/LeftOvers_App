import axios from 'axios';
import IRecipesService from "./IRecipesServices";
import Recipes from "../../Models/Recipes";

export default class RecipesService implements IRecipesService {
    private readonly API_URL = "http://leftovers.alwaysdata.net/recipes";

    async getAllRecipes(): Promise<Recipes[]> {
        try {
            const response = await axios.get(this.API_URL);
            return response.data as Recipes[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }


    async getRecipeById(id: number): Promise<Recipes | null>{
        try {
            const response = await axios.get(`${this.API_URL}/${id}`);
            //console.log(response.name);
            return response.data as Recipes;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }
    
}
