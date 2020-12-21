import { Node } from 'slate';
import { client } from '.';

export type CreateHobbyRequest = {
    slug: string;
    name: string;
    description: string;
    profileImgBase64: string;
    bannerImgBase64: string;
};

export type CreatePostRequest = {
    title: string;
    type: 'text' | 'image';
    content: Node[];
};

export const createHobby = async (hobby: CreateHobbyRequest): Promise<void> => {
    return await client.post('/hobbies', hobby);
};
