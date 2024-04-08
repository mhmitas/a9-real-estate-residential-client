import React from 'react';

const PropertyCard = ({ property }) => {
    const { estate_title, description, image } = property
    return (
        <div className="card max-w-96 bg-base-200 shadow-xl mb-8">
            <figure><img src={image} alt={estate_title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                {/* <p><b>Location:</b> {location}</p> */}
                {description.length > 84 ? <p>{description.slice(0, 106)}....</p> : <p>{description}</p>}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;