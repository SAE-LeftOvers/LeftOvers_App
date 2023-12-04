import Profil from "../../Models/Profil";
import IProfileService from "./IProfileService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ProfileService implements IProfileService {
    async getProfiles(): Promise<Profil[]> {
        const existingProfiles = await AsyncStorage.getItem('profiles');
        return JSON.parse(existingProfiles) || [];
    }

    async addProfile(new_profile : Profil): Promise<void> {
        const list = [new_profile]
        const key_exist = ((await AsyncStorage.getAllKeys()).includes('profiles'))
        if (!key_exist) await AsyncStorage.setItem('profiles', JSON.stringify(list))
        else await AsyncStorage.mergeItem('profiles', JSON.stringify(list))
    }

}