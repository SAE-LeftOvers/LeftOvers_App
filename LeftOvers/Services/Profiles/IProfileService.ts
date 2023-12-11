import Profile from "../../Models/Profile";

export default interface IProfileService {
    getProfiles(): Promise<Profile[]>,
    addProfile(newProfile: Profile): Promise<boolean>,
    delProfile(index: number): Promise<boolean>
}