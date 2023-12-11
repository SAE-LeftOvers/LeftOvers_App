export default class Profile {
    public name: string;
    public avatar: string;
    public allergies: string[];
    public diets: string[];
    public isActive: string;
    public isWaiting: string

    constructor( name: string, avatar: string, allergies: string[], diets: string[], isActive: string, isWaiting: string) {
      this.name = name;
      this.avatar = avatar;
      this.diets = diets;
      this.allergies = allergies;
      this.isActive = isActive;
      this.isWaiting = isWaiting
    }

    // get name(): string {
    //     return this._name;
    // }

    // get avatar(): string{
    //     return this._avatar;
    // }

    // get allergies(): string[]{
    //     return this._allergies;
    // }

    // get diets(): string[]{
    //     return this._diets;
    // }

    // get isActive(): string{
    //     return this._isActive;
    // }

    // get isWaiting(): string{
    //     return this._isWaiting;
    // }
  }