import Profil from "../../Models/Profil";
import IProfileService from "./IProfileService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ProfileService implements IProfileService {
    async getProfiles(): Promise<Profil[]> {
        const existingProfiles = await AsyncStorage.getItem('profiles');
        return JSON.parse(existingProfiles) || [];
    }
    addProfile(new_profile : Profil): void {
        throw new Error("Method not implemented.");
    }

}