import { client } from '.';

export type CreateHobbyRequest = {
    slug: string;
    name: string;
    description: string;
    profileImgBase64: string;
    bannerImgBase64: string;
};

export const createHobby = async (hobby: CreateHobbyRequest): Promise<void> => {
    return await client.post('/hobbies', hobby);
};
