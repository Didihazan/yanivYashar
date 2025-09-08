import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { cloudinaryStories } from '../../utils/cloudinary';
import { PageCover, Page } from './Page';
import './Album.css';

const PhotoAlbum = () => {
    const flipBookRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // כל התמונות מכל הסטוריז
    const allImages = cloudinaryStories.flatMap(story => story.images);

    // זיהוי מובייל
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // הגדרות רספונסיביות - רק שינויי גדלים
    const getAlbumSettings = () => {
        if (isMobile) {
            return {
                width: Math.min(window.innerWidth - 40, 350),
                height: Math.min(window.innerHeight * 0.6, 450),
                minWidth: 280,
                maxWidth: 350,
                minHeight: 350,
                maxHeight: 450
            };
        } else {
            return {
                width: 500,
                height: 650,
                minWidth: 315,
                maxWidth: 1000,
                minHeight: 400,
                maxHeight: 1533
            };
        }
    };

    const settings = getAlbumSettings();

    return (
        <div className="album-container">
            <HTMLFlipBook
                ref={flipBookRef}
                width={settings.width}
                height={settings.height}
                size="stretch"
                minWidth={settings.minWidth}
                maxWidth={settings.maxWidth}
                minHeight={settings.minHeight}
                maxHeight={settings.maxHeight}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="photo-album"
                autoSize={false}
                usePortrait={isMobile}
                disableFlipByClick={isMobile}
            >
                {/* עמוד השער */}
                <PageCover>
                    אלבום דיגיטלי
                </PageCover>

                {/* שאר העמודים */}
                {allImages.map((image, index) => (
                    <Page key={index} image={image} number={index + 1} />
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default PhotoAlbum;