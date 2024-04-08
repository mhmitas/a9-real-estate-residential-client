import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const { estate_title, description, image, segment_name } = property
    return (
        <div className="card max-w-md	 bg-base-200 shadow-xl mb-8">
            <figure><img src={image} alt={estate_title} /></figure>
            <div className="card-body">
                <div className='badge badge-primary'>{segment_name}</div>
                <h2 className="card-title">{estate_title}</h2>
                {/* <p><b>Location:</b> {location}</p> */}
                {description.length > 84 ? <p>{description.slice(0, 106)}....</p> : <p>{description}</p>}
                <div className="card-actions justify-end">
                    <Link to="">
                        <button className="btn btn-primary">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;