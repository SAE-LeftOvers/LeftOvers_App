import Profile from "../../Models/Profile";

export default interface IProfileService {
    getProfiles(): Promise<Profile[]>,
    addProfile(new_profile: Profile): Promise<boolean>,
    delProfile(profile_name_to_del: string): Promise<boolean>
}