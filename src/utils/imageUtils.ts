export const toBase64 = async (image: File): Promise<string> => {
    const reader = new FileReader();

    return new Promise((resolve) => {
        reader.addEventListener('load', () => {
            resolve(reader.result as string);
        });

        reader.readAsDataURL(image);
    });
};
