import Profil from "../../Models/Profil";

export default interface IProfileService {
    getProfiles(): Promise<Profil[]>,
    addProfile(new_profile: Profil): Promise<boolean>,
    delProfile(profile_name_to_del: string): Promise<boolean>
}