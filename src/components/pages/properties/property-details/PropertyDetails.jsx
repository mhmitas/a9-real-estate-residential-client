import { useParams, useLoaderData } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { firstLetterUppercase } from '../../../../utils/firstLetterUppercase';


const PropertyDetails = () => {

    const { propertyId } = useParams()

    const properties = useLoaderData()

    const property = properties.find(p => p.id == propertyId)
    const { area, description, detail_description, estate_title, facilities, image, location, price, segment_name, status } = property;
    // console.log(property);

    return (
        <div>
            <div className="flex flex-col lg:flex-row mb-8 bg-base-200">
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
            <div className='p-4'>
                <h3><strong>Segment Name: </strong>{segment_name}</h3>
                {/* <h3>{description}</h3> */}
                <h3><strong>Area: </strong>{area}</h3>
                <div><strong>Status: </strong><span className='badge badge-primary'>{status}</span></div>
                <div><strong>Price: </strong><span className='badge'>{price}</span></div>
                <br />
                <div>
                    <div className='text-xl font-bold my-2'>Facilities:</div>
                    <ul className='ml-10 list-decimal'>
                        {
                            facilities.map(
                                (facility, idx) => <li key={idx} className='list-disc'>{facility}</li>
                            )
                        }
                    </ul>
                </div>
                <div className='overflow-x-auto'>
                    <div className='text-xl font-bold mb-2 mt-10'>Details of {segment_name}</div>
                    <table className="table ">
                        <tbody className='list-decimal'>
                            {Object.keys(detail_description).map(
                                (item, idx) => <tr key={idx} className=''>
                                    <th>{firstLetterUppercase(item)}</th>
                                    <td>{detail_description[item]}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <button className="btn btn-primary"><FaRegBookmark></FaRegBookmark></button> */}
        </div>
    );
};

export default PropertyDetails;