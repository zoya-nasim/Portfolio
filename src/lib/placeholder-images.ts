import data from './placeholder-images.json';

export type ImagePlaceholder = {
    id: string;
    description: string;
    imageUrl: string;
    imageHint: string;
};

// This is now an empty array, as we are no longer using placeholder images
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
