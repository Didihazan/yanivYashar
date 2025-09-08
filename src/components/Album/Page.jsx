import React from 'react';
import { getImageUrl } from '../../utils/cloudinary';

// Component for the Book Cover
export const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard">
            <div className="page-content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

// Component for the inner pages
export const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <div className="page-image-container">
                    <img
                        src={getImageUrl(props.image.publicId, 500, 600)}
                        alt={props.image.alt}
                        className="page-image"
                    />
                </div>
                <div className="page-footer">
                    <p className="page-text">{props.image.caption}</p>
                    <p className="page-number">{props.number}</p>
                </div>
            </div>
        </div>
    );
});