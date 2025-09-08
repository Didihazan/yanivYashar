import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getImageUrl, CloudinaryImage } from '../../utils/cloudinary';
import './GridGallery.css';

// StoryViewer נשאר כמעט זהה, אין צורך לשנות אותו
const StoryViewer = ({ images, startIndex, onClose }) => {
    // ... הקוד המלא של StoryViewer מהגרסה הקודמת נמצא כאן
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const STORY_DURATION = 5000;
    const handleImageLoad = () => setIsImageLoading(false);
    const changeImage = useCallback((newIndex) => {
        setIsImageLoading(true);
        setCurrentIndex(newIndex);
        setProgress(0);
    }, []);

    const nextImage = useCallback(() => {
        if (currentIndex < images.length - 1) {
            changeImage(currentIndex + 1);
        } else { onClose(); }
    }, [currentIndex, images.length, onClose, changeImage]);

    useEffect(() => {
        let interval;
        if (!isPaused && !isImageLoading) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        nextImage();
                        return 0;
                    }
                    return prev + (100 / (STORY_DURATION / 50));
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isPaused, isImageLoading, nextImage]);

    const prevImage = () => {
        if (currentIndex > 0) { changeImage(currentIndex - 1); }
    };

    useEffect(() => {
        const handleKeyDown = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const currentImage = images[currentIndex];

    return createPortal(
        <div className="story-viewer-overlay">
            <img src={getImageUrl(currentImage.publicId, 50)} className="story-viewer-background" alt="" />
            <div className="story-viewer-header">
                <div className="story-viewer-progress-bars">
                    {images.map((_, index) => (
                        <div key={index} className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: index === currentIndex ? `${progress}%` : (index < currentIndex ? '100%' : '0%') }}/>
                        </div>
                    ))}
                </div>
                <div className="story-viewer-top-bar">
                    <span className="story-viewer-caption">{currentImage.caption}</span>
                    <button onClick={onClose} className="story-viewer-close-btn" aria-label="סגור"><X size={20} /></button>
                </div>
            </div>
            <div className="story-viewer-content" onMouseDown={() => setIsPaused(true)} onMouseUp={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
                {isImageLoading && <div className="loader"></div>}
                <img src={getImageUrl(currentImage.publicId, 1080, 1920)} alt={currentImage.alt} className={`story-viewer-image ${!isImageLoading ? 'story-viewer-image-loaded' : ''}`} onLoad={handleImageLoad}/>
            </div>
            <div className="story-viewer-nav-right" onClick={prevImage}></div>
            <div className="story-viewer-nav-left" onClick={nextImage}></div>
        </div>,
        document.body
    );
};

// --- רכיב תמונת גריד ---
const GridItem = ({ image, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <button className="photo-grid-item" onClick={onClick}>
            <CloudinaryImage
                publicId={image.publicId}
                alt={image.alt}
                size={{ width: 400, height: 400 }}
                className={`photo-grid-img ${isLoaded ? 'photo-grid-img-loaded' : ''}`}
                onLoad={() => setIsLoaded(true)}
            />
            <div className="overlay">
                <span>{image.caption}</span>
            </div>
        </button>
    );
}

// --- הרכיב הראשי של הגלריה עם טעינה עצלה ---
const GridGallery = ({ images }) => {
    const [viewerState, setViewerState] = useState({ isOpen: false, index: 0 });

    // *** לוגיקה חדשה לטעינה עצלה ***
    const [visibleCount, setVisibleCount] = useState(9); // מתחילים עם 9 תמונות
    const loadMoreRef = useRef(null); // זה יהיה ה"חיישן" שלנו
    const IMAGES_TO_LOAD = 9; // כמה תמונות לטעון בכל פעם

    const loadMoreImages = useCallback(() => {
        setVisibleCount(prevCount => Math.min(prevCount + IMAGES_TO_LOAD, images.length));
    }, [images.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMoreImages();
                }
            },
            { threshold: 1.0 } // טען כשהאלמנט נראה במלואו
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [loadMoreImages]);

    const openViewer = (index) => {
        setViewerState({ isOpen: true, index });
        document.body.style.overflow = 'hidden';
    };

    const closeViewer = () => {
        setViewerState({ isOpen: false, index: 0 });
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const visibleImages = images.slice(0, visibleCount);
    const hasMoreImages = visibleCount < images.length;

    return (
        <>
            <div className="photo-grid-gallery">
                {visibleImages.map((image, index) => (
                    <GridItem
                        key={`${image.publicId}-${index}`}
                        image={image}
                        onClick={() => openViewer(index)}
                    />
                ))}
            </div>

            {/* ה"חיישן" לטעינה נוספת והודעת טעינה */}
            {hasMoreImages && (
                <div ref={loadMoreRef} className="loading-trigger">
                    <div className="loader"></div>
                </div>
            )}

            {viewerState.isOpen && (
                <StoryViewer images={images} startIndex={viewerState.index} onClose={closeViewer} />
            )}
        </>
    );
};

export default GridGallery;