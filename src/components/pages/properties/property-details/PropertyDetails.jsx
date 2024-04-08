import { useParams, useLoaderData } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa6";

const PropertyDetails = () => {

    const { propertyId } = useParams()
    console.log(propertyId);

    const properties = useLoaderData()
    // console.log(properties);
    const property = properties.find(p => p.id == propertyId)
    // console.log(property);
    const { area, description, detail_description, estate_title, facilities, image, location, price, segment_name, status } = property

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-8">
            <figure className=' lg:max-w-[66%]'><img src={image} alt={segment_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                {/* <p>{detail_description}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;