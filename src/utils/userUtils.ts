/**
 * Returns the metadata assigned to the provided user object.
 * @param user User object to fetch metadata from.
 * @param key Key of the metadata to fetch.
 */
export const getMetadata = (user: any, key: string) => {
    if (!user || !user['https://hobbyist.app/metadata']) return null;

    return user['https://hobbyist.app/metadata'][key];
};
