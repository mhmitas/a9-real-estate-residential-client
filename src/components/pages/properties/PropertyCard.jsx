import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast'

const PropertyCard = ({ property }) => {
    const { user } = useContext(AuthContext)
    const { estate_title, description, image, segment_name, id, status } = property;

    function handleViewDetailBtn() {
        if (!user) {
            toast("Please sign in to view property! 😊")
        }
    }

    return (
        <div className="card max-w-md	 bg-base-200 shadow-xl mb-8">
            <figure><img src={image} alt={estate_title} /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <span className='badge badge-outline badge-primary'>{segment_name}</span>
                    <span className='badge badge-outline badge-primary'>{status}</span>
                </div>
                <h2 className="card-title">{estate_title}</h2>
                {/* <p><b>Location:</b> {location}</p> */}
                {description.length > 84 ? <p>{description.slice(0, 106)}....</p> : <p>{description}</p>}
                <div className="card-actions justify-end">
                    {/* <Link to={`property/${id}`}>
                        <button className="btn btn-primary">View Property</button>
                    </Link> */}
                    <Link to={`property/${id}`}>
                        <button onClick={handleViewDetailBtn} className="btn btn-primary">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;