import Ingredient from "../../Models/Ingredient";
import IIngredientService from "./IIngredientService";
import axios from 'axios';

export default class IngredientService implements IIngredientService {
    private readonly API_URL = "http://leftovers.alwaysdata.net/ingredients";

    constructor() {}

    async getAllIngredient(): Promise<Ingredient[]> {
        try {
            const response = await axios.get(this.API_URL);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }


    async getIngredientById(id: Number): Promise<Ingredient | null>{
        try {
            const response = await axios.get(`${this.API_URL}/${id}`);
            return response.data as Ingredient;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }
    
    async getIngredientByLetter(letter: String): Promise<any>{
        try {
            const response = await axios.get(`${this.API_URL}/letter/${letter}`);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }

    async getfilteredIngredient(prompt: String): Promise<Ingredient[]> {
        try {
            const response = await axios.get(`${this.API_URL}/filter/${prompt}`);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
        return;
    }
}
