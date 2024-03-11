import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'// added route
import PropertyDetails from './PropertyDetails' // added this

const PropertyCard = ({ property }) => {
    const {
        name,
        description,
        price,
        bedrooms,
        bathrooms,
        address,
        amenities,
        id,
    } = property
    const navigate = useNavigate();

const handleButtonClick = () => {
        //alert(`Property Name: ${property.name}`);
        navigate(`/api/properties/${property.id}`,
    };

  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
              <Link to={`api/properties/${property.id}`}>
                  <div className="font-bold text-xl mb-2">{name}</div>

              </Link>
              <button
            className="btn btn-primary fw-bolder"
            onClick={handleButtonClick}          >
            + Sale
          </button>

                    {/* <Route
                        path={`/properties/${id}`}  //can delete if doesn't work
                        element={<PropertyDetails />}
                    />
                    <button className="btn btn-success"
                        onClick={PropertyDetails}>Explore Courses
                    </button> */}
              <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {bedrooms} Bedrooms
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {bathrooms} Bathrooms
              </span>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {address.address}, {address.city}, {address.state}{' '}
                  {address.zip}
              </span>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  ${price}
              </span>
          </div>
          <div className="px-6 py-4">
              <div className="font-bold text-lg mb-2">Amenities</div>
              <div className="flex flex-wrap">
                  {amenities.ac && (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          AC
                      </span>
                  )}
                  {amenities.heating && (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Heating
                      </span>
                  )}
                  {amenities.washer_dryer && (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          Washer/Dryer
                      </span>
                  )}
                  {/* <button onClick={handleButtonClick}>Show Property Name</button> */}
              </div>
          </div>
      </div>
  )
}

export default PropertyCard
