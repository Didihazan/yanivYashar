import React from 'react';
import { cloudinaryStories } from '../../utils/cloudinary';
import GridGallery from './GridGallery';

const PhotoAlbum = () => {
    const allImages = cloudinaryStories.flatMap(story => story.images);

    return (
        // הוספנו את ה-div הזה עם קלאס חדש
        <div className="gallery-container">
            <GridGallery images={allImages} />
        </div>
    );
};

export default PhotoAlbum;