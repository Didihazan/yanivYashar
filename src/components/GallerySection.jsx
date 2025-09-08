import React from 'react';
import PhotoAlbum from './Album/PhotoAlbum'; // Import the new component

const GallerySection = () => {
    return (
        <section id="gallery" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    רגעים מהאלבומים
                </h2>
                <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    כל תמונה היא סיפור, כל אלבום הוא חיים שלמים. דפדפו כדי לחוות את הקסם.
                </p>

                {/* Here we use our new PhotoAlbum component */}
                <PhotoAlbum />

            </div>
        </section>
    );
};

export default GallerySection;