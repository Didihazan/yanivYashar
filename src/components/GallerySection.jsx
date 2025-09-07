import React from 'react';

const GallerySection = () => {
    return (
        <section id="gallery" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    גלריה
                </h2>
                <div className="text-center text-gray-600 text-lg">
                    כאן תופיע גלריית תמונות מהעבודות של יניב
                </div>
            </div>
        </section>
    );
};

export default GallerySection;