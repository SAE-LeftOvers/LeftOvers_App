import Ingredient from "./Ingredient";

export default class Recipes {
    private _id: number;
    private _name: string;
    private _description: string; 
    private _time_to_cook: number;
    private _steps: string[];
    private _ingredients: Ingredient[];

    constructor(id: number, name: string, description: string, time_to_cook: number, steps: string[], ingredients: Ingredient[]) {
      this._id = id;
      this._name = name;
      this._description = description;
      this._time_to_cook = time_to_cook;
      this._steps = steps;
      this._ingredients = ingredients;
    }

    get name(): string {
        return this._name;
    }

    get id(): number{
        return this._id;
    }

    get description(): string{
        return this._description;
    }

    get time_to_cook(): number{
        return this._time_to_cook;
    }

    get steps(): string[]{
        return this._steps;
    }

    get ingredients(): Ingredient[]{
        return this._ingredients;
    }
    

    static convertApiResponse(apiResponse: string): Recipes[] {
      const parsedResponses = JSON.parse(apiResponse);
      return parsedResponses.map((item: any) => new Recipes(item.id, item.name, item.description, item.time_to_cook, item.steps, item.ingredient));
    }
  }