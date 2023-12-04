import Profil from "../../Models/Profil";

export default interface IProfileService {
    getProfiles(): Promise<Profil[]>,
    addProfile(new_profile: Profil): Promise<boolean>
}