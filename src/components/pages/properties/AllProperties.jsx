import React from 'react';
import { useLoaderData } from 'react-router-dom'
import PropertyCard from './PropertyCard';

const AllProperties = () => {

    const allProperties = useLoaderData()
    // console.log(allProperties);

    return (
        <div>
            <div className='my-6'>
                <h3 className='text-3xl font-semibold'>Trending Properties</h3>
                <p className='text-xl'>Viewed and saved the most over the past 24 hours</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    allProperties.map(
                        property => <PropertyCard
                            key={property.id}
                            property={property}
                        ></PropertyCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllProperties;