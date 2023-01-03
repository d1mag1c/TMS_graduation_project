import { tmsFetch } from "./tmsFetch";

export const getProfile = async () => {
    const response = await tmsFetch(
        'https://studapi.teachmeskills.by/auth/users/me/'
    );
    if (response.ok) {
        return await response.json();
    }
};

