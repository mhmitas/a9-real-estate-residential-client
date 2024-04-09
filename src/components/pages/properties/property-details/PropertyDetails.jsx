import { useParams, useLoaderData } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const PropertyDetails = () => {

    const { propertyId } = useParams()

    const properties = useLoaderData()

    const property = properties.find(p => p.id == propertyId)
    // console.log(property);
    const { area, description, detail_description, estate_title, facilities, image, location, price, segment_name, status } = property;

    for (const key in detail_description) {
        if (Object.hasOwnProperty.call(detail_description, key)) {
            const element = detail_description[key];
            // console.log(key.trimStart(), ":", element);
        }
    }
    let text = 'abcdefg'
    console.log(text.trimStart()[0]);

    return (
        <div>
            <div className="flex flex-col lg:flex-row my-8 bg-base-200">
                <div className=' lg:max-w-[66%]'>
                    <img src={image} alt={segment_name} />
                </div>
                <div className='flex items-center p-8'>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold">{estate_title}</h2>
                        <div><strong>Location: </strong>{location}</div>
                        <p>{description}</p>
                        {/* <div><strong>Price: </strong>{location}</div> */}
                    </div>
                </div>
            </div>
            <div>
                <h3>{segment_name}</h3>
                {/* <h3>{description}</h3> */}
                <h3>{area}</h3>
                <div>{status}</div>
                <div>{price}</div>
                <div>
                    <div>Facilities:</div>
                    <ul>
                        {
                            facilities.map(
                                (facility, idx) => <li key={idx} className='flex items-center gap-2'><FaRegCheckCircle />{facility}</li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <div>Description:</div>
                    <ul>
                        {/* {
                            for (const key in detail_description) {
                                if (Object.hasOwnProperty.call(detail_description, key)) {
                                    const element = detail_description[key];
                                    
                                }
                            }
                        } */}
                    </ul>
                </div>
            </div>
            {/* <button className="btn btn-primary"><FaRegBookmark></FaRegBookmark></button> */}
        </div>
    );
};

export default PropertyDetails;