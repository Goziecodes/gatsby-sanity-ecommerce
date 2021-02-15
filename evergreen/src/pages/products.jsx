import React, { useState } from 'react';
import { Link } from 'gatsby';
import cam1 from '../assets/images/cam1.png';
import cam2 from '../assets/images/cam2.png';
import cam3 from '../assets/images/cam3.png';
import cam4 from '../assets/images/cam4.png';
import panel from '../assets/images/panel.jpg';
import panel2 from '../assets/images/panel2.png';
import ba3 from '../assets/images/ba3.png';
import charge from '../assets/images/charge.png';
import inverter from '../assets/images/inverter.png';

const Products = () => {
  const [showSolar, setshow] = useState(true);
  return (
    <>
      <div className="text-center mb-20 text-4xl lg:text-left lg:px-40 lg:text-5xl mt-12 ">
        <h1 className="text-blue-400 mb-8">
          <span>Our</span>{' '}
          <span>
            <b
              className="text-blue-500 font-normal"
              style={{ fontFamily: 'GilroyBold' }}
            >
              Products
            </b>
          </span>
        </h1>
      </div>

      <div className="text-left text-5xl px-8 text-blue-500  mb-8">
        <h3>
          <b>Categories</b>
        </h3>

        <div className="w-96 flex border border-blue-400 rounded-full text-4xl mt-8 overflow-hidden">
          <button
            type="button"
            onClick={({ showSolar }) => setshow(!showSolar)}
            className={`w-1/2 ${
              showSolar ? 'bg-blue-400 text-white' : 'bg-white text-blue-400'
            }  text-center`}
          >
            <p>Solar</p>
          </button>
          <button
            type="button"
            onClick={(showSolar) => setshow(!showSolar)}
            className={`w-1/2 ${
              showSolar ? 'bg-white text-blue-400' : 'bg-blue-400 text-white'
            }  text-center`}
          >
            <p>Security</p>
          </button>
        </div>
      </div>

      {showSolar ? (
        <div className="container px-5 py-2 mx-auto lg:px-32">
          <div className="flex flex-wrap  justify-evenly mx-auto ">
            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-96"
                  src={panel}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Solar Panels
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-96"
                  src={panel2}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Batteries{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={ba3}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Charge Controllers{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={charge}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Cameras{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={inverter}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Inverters{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container px-5 py-2 mx-auto lg:px-32">
          <div className="flex flex-wrap  justify-evenly mx-auto ">
            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={cam1}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Solar Panels
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={cam2}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Batteries{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={cam3}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Charge Controllers{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>

            <Link to="/singleProduct">
              <div className="w-60 mt-6 lg:w-4/12 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  alt=""
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-auto"
                  src={cam4}
                  style={{
                    boxShadow: 'rgb(173 195 173) 6px 2px 16px 3px',
                  }}
                />
                <div className="flex   mx-auto mt-6 items-center sm:flex-row sm:items-center">
                  <h1 className="flex-grow mb-2 text-2xl font-medium tracking-tighter text-gray-900 title-font">
                    Cameras{' '}
                  </h1>
                  <button
                    type="button"
                    className="flex-shrink-0 px-2 py-1  font-semibold text-white transition duration-500 ease-in-out transform rounded-lg sm:mt-0 bg-gradient-to-r from-blue-700 hover:from-blue-600 to-blue-600 hover:to-blue-700 hover:-translate-y-1 hover:scale-110 focus:shadow-outline focus:outline-none"
                  >
                    🖂
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
