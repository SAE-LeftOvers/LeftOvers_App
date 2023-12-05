import Profil from "../../Models/Profil";
import IProfileService from "./IProfileService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ProfileService implements IProfileService {
    async getProfiles(): Promise<Profil[]> {
        const results = await AsyncStorage.getItem('profiles');
        const tmp = JSON.parse(results)
        let existingProfiles: Profil[] = []
        for (let item of tmp) {
            existingProfiles.push(new Profil(item._name, item._avatar, item._allergy, item._diets))
        }
        return existingProfiles;
    }

    async addProfile(new_profile : Profil): Promise<boolean> {
        const existingProfiles = await this.getProfiles()
        for (let current_profile of existingProfiles) { 
            if (current_profile.name == new_profile.name) {
                console.log("Tried to create a profil already existing !")
                return false
            }
        }
        await AsyncStorage.setItem('profiles', JSON.stringify([...existingProfiles, new_profile]))
        return true
    }

    async delProfile(profile_name_to_del: string): Promise<boolean> {
        const existing_profiles = await this.getProfiles()
        let key: number = -1
        for (let current_profile of existing_profiles) {
            if (current_profile.name == profile_name_to_del) {
                let updated_profile = existing_profiles.splice(key, 1)
                await AsyncStorage.setItem('profiles', JSON.stringify(updated_profile))
                return true
            }
            key ++
        }
        return false
    }
}