export default class Ingredient {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
      this._id = id;
      this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get id(): number{
        return this._id;
    }
    

    static convertApiResponse(apiResponse: string): Ingredient[] {
      const parsedResponses = JSON.parse(apiResponse);
      return parsedResponses.map((item: any) => new Ingredient(item.id, item.name));
    }
  }
