export default class Profil {
    private _id: number;
    private _name: string;
    private _allergy: string[];
    private _diets: string[];

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

    get allergy(): string[]{
        return this._allergy;
    }

    get diets(): string[]{
        return this._diets;
    }
  }