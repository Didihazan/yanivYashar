import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { cloudinaryStories } from '../../utils/cloudinary';
import { PageCover, Page } from './Page';
import './Album.css';

const PhotoAlbum = () => {
    // We take all the images from all the stories into one big list
    const allImages = cloudinaryStories.flatMap(story => story.images);

    return (
        <div className="album-container">
            <HTMLFlipBook
                width={500}
                height={650}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="photo-album"
             autoSize>
                {/* Page 1: The Cover */}
                <PageCover>
                    אלבום דיגיטלי
                </PageCover>

                {/* The rest of the pages with images */}
                {allImages.map((image, index) => (
                    <Page key={index} image={image} number={index + 1} />
                ))}

            </HTMLFlipBook>
        </div>
    );
};

export default PhotoAlbum;