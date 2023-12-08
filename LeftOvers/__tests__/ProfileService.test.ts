import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileService from '../Services/Profiles/ProfileService';
import Profile from '../Models/Profile';

type AsyncStorageMock = {
    getItem: jest.Mock<Promise<string | null>, [string]>,
    setItem: jest.Mock<Promise<void>, [string, string]>,
    clear: jest.Mock<Promise<void>>,
};

jest.mock('@react-native-async-storage/async-storage', () => {
    const asyncStorageMock: AsyncStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
    };
    return asyncStorageMock;
});

describe('ProfileService', () => {
    beforeEach(() => {
        (AsyncStorage.getItem as jest.Mock).mockReset();
        (AsyncStorage.setItem as jest.Mock).mockReset();
        (AsyncStorage.clear as jest.Mock).mockReset();
    });

    describe('getProfiles', () => {
        it('should return an empty array if no profiles are stored', async () => {
            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

            const profileService = new ProfileService();
            const profiles = await profileService.getProfiles();

            expect(profiles).toEqual([]);
        });

        it('should return an array of profiles if profiles are stored', async () => {
            const storedProfiles = [
                { _name: 'John', _avatar: 'avatar1', _allergy: ['none'], _diets: [] },
                { _name: 'Jane', _avatar: 'avatar2', _allergy: ['peanuts'], _diets: ['vegan'] },
            ];

            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(storedProfiles));

            const profileService = new ProfileService();
            const profiles = await profileService.getProfiles();

            expect(profiles.length).toBe(2);
            expect(profiles[0]).toBeInstanceOf(Profile);
            expect(profiles[0].name).toEqual('John');
        });
    });

    describe('addProfile', () => {
        it('should add a new profile to the stored profiles', async () => {
            const existingProfiles = [
                { _name: 'John', _avatar: 'avatar1', _allergy: ['none'], _diets: [] },
            ];

            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(existingProfiles));
            (AsyncStorage.setItem as jest.Mock).mockResolvedValueOnce(null);

            const newProfile = new Profile('Jane', 'avatar2', ['peanuts'], ['vegan']);

            const profileService = new ProfileService();
            const result = await profileService.addProfile(newProfile);

            expect(result).toBe(true);

            expect(AsyncStorage.setItem).toHaveBeenCalledWith('profiles', expect.any(String));
        });

        it('should not add a profile if it already exists', async () => {
            const existingProfiles = [
                { _name: 'John', _avatar: 'avatar1', _allergy: ['none'], _diets: [] },
            ];

            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(existingProfiles));

            const existingProfile = new Profile('John', 'avatar1', ['none'], []);

            const profileService = new ProfileService();
            const result = await profileService.addProfile(existingProfile);

            expect(result).toBe(false);

            expect(AsyncStorage.setItem).not.toHaveBeenCalled();
        });
    });

    describe('delProfile', () => {
        it('should delete a profile by name', async () => {
            const existingProfiles = [
                { _name: 'John', _avatar: 'avatar1', _allergy: ['none'], _diets: [] },
                { _name: 'Jane', _avatar: 'avatar2', _allergy: ['peanuts'], _diets: ['vegan'] },
            ];

            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(existingProfiles));
            (AsyncStorage.setItem as jest.Mock).mockResolvedValueOnce(null);

            const profileService = new ProfileService();
            const result = await profileService.delProfile('John');

            expect(result).toBe(true);

            expect(AsyncStorage.setItem).toHaveBeenCalledWith('profiles', expect.any(String));
        });

        it('should return false if the profile does not exist', async () => {
            const existingProfiles = [
                { _name: 'John', _avatar: 'avatar1', _allergy: ['none'], _diets: [] },
            ];

            (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(existingProfiles));

            const profileService = new ProfileService();
            const result = await profileService.delProfile('Jane');

            expect(result).toBe(false);

            expect(AsyncStorage.setItem).not.toHaveBeenCalled();
        });
    });
});
