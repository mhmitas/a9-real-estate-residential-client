import { useParams, useLoaderData } from 'react-router-dom'

const PropertyDetails = () => {

    const { propertyId } = useParams()
    console.log(propertyId);

    const properties = useLoaderData()
    console.log(properties);

    return (
        <div>
            <h3 className="text-4xl">Property details</h3>
        </div>
    );
};

export default PropertyDetails;