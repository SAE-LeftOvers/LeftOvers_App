import AsyncStorage from "@react-native-async-storage/async-storage";
import Ingredient from "../../Models/Ingredient";
import IIngredientService from "./IIngredientService";
import axios from 'axios';
import eventEmitter from "../../screens/EventEmitter";

export default class IngredientService implements IIngredientService {
    private readonly API_URL = "http://leftovers.alwaysdata.net/ingredients";

    async getAllIngredient(): Promise<Ingredient[]> {
        try {
            const response = await axios.get(this.API_URL);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }


    async getIngredientById(id: number): Promise<Ingredient | null>{
        try {
            const response = await axios.get(`${this.API_URL}/${id}`);
            return response.data as Ingredient;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }
    
    async getIngredientByLetter(letter: string): Promise<any>{
        try {
            const response = await axios.get(`${this.API_URL}/letter/${letter}`);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }

    async getfilteredIngredient(prompt: string): Promise<Ingredient[]> {
        try {
            const response = await axios.get(`${this.API_URL}/filter/${prompt}`);
            return response.data as Ingredient[];
        } catch (error) {
            throw new Error('Erreur lors de la récupération des ingrédients : ' + error.message);
        }
    }

    async getAvailableIngredient(): Promise<Ingredient[]> {
        const results = await AsyncStorage.getItem('ingredient')
        const availableIngredient = JSON.parse(results)
        if(availableIngredient.length == 0){
            availableIngredient.push(new Ingredient(-1, "None"))
        }
        console.log("AvailableIngredient:", availableIngredient)
        return availableIngredient;
    }

    async addIngredient(newIngredient: Ingredient): Promise<boolean> {
        let selectedIngredients = await this.getAvailableIngredient()
        const exists = selectedIngredients.find((ingredient) => ingredient.id === newIngredient.id);
        if (!exists) {
            let existingAvailableIngredient = await AsyncStorage.getItem('ingredient');
            existingAvailableIngredient = existingAvailableIngredient ? JSON.parse(existingAvailableIngredient) : [];
            const updatedAvailableIngredient = [...existingAvailableIngredient, newIngredient];
            await AsyncStorage.setItem('ingredient', JSON.stringify(updatedAvailableIngredient));
            eventEmitter.emit('ingredientAdded');
            return true
        }
        return false
    }

    async delIngredient(idIngredient: number): Promise<boolean> {
        let selectedIngredients = await this.getAvailableIngredient()
        const updatedIngredients = selectedIngredients.filter((ingredient) => ingredient.id !== idIngredient);
        await AsyncStorage.setItem('ingredient', JSON.stringify(updatedIngredients));
        eventEmitter.emit('ingredientDeleted');
        return true
    }
}
