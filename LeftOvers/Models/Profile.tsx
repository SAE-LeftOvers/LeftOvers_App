export default class Profile {
    private _name: string;
    private _avatar: string;
    private _allergy: string[];
    private _diets: string[];

    constructor( name: string, avatar: string, allergy: string[], diets: string[]) {
      this._name = name;
      this._avatar = avatar;
      this._allergy = allergy;
      this._diets = diets;
    }

    get name(): string {
        return this._name;
    }


    get avatar(): string{
        return this._avatar;
    }

    get allergy(): string[]{
        return this._allergy;
    }

    get diets(): string[]{
        return this._diets;
    }
}