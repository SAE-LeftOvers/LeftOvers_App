import Profile from "../../Models/Profile";
import IProfileService from "./IProfileService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import eventEmitter from "../../screens/EventEmitter";

export default class ProfileService implements IProfileService {
    async getProfiles(): Promise<Profile[]> {
        const results = await AsyncStorage.getItem('profiles')
        const existingProfiles = JSON.parse(results)
        if(existingProfiles.length == 0){
            existingProfiles.push(new Profile("None", "logo.png", [], [], "none", "none"))
        }
        return existingProfiles;
    }

    async addProfile(newProfile : Profile): Promise<boolean> {
        let existingProfiles = await AsyncStorage.getItem('profiles');
        existingProfiles = existingProfiles ? JSON.parse(existingProfiles) : [];
        const updatedProfiles = [...existingProfiles, newProfile];
        await AsyncStorage.setItem('profiles', JSON.stringify(updatedProfiles));
        eventEmitter.emit("profileAdded")
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