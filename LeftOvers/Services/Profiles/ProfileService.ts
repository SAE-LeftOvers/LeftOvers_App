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
        let existingProfiles = await AsyncStorage.getItem('profiles')
        existingProfiles = existingProfiles ? JSON.parse(existingProfiles) : [];
        const updatedProfiles = [...existingProfiles, newProfile];
        await AsyncStorage.setItem('profiles', JSON.stringify(updatedProfiles));
        eventEmitter.emit("profileAdded")
        return true
    }

    async delProfile(index: number): Promise<boolean> {
        const existingProfiles = await this.getProfiles()
        const updatedProfiles = existingProfiles.filter((profile, i) => i !== index);
        await AsyncStorage.setItem('profiles', JSON.stringify(updatedProfiles));
        eventEmitter.emit('profileDeleted');
        return true
    }
}