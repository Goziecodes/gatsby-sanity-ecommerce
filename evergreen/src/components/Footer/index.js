import React from 'react';
// import './style.css';

const Footer = () => (
  <div>
    {/* <div className="css-shapes-preview" /> */}

    <footer className="mt-10 text-white bg-blue-400  body-font w-full">
      <div className="container flex flex-wrap pl-8  justify-between w-full">
        <div className="flex-shrink-0 w-64 mx-auto  md:mx-0 md:text-left text-3xl text-white">
          <p className="mt-6   ">No. 6, Azikiwe Road, Awka,Anambra</p>
          <p className="mt-6  ">
            08162545042 <br />
            08162545042
          </p>
        </div>
        <div className="flex flex-wrap  mb-10  md:pl-20 md:mt-0 md:text-left ">
          <div className="w-full lg:w-1/3 md:w-1/2">
            <nav className="mb-10 list-none flex flex-col justify-end">
              <li className="w-60 h-10 bg-blue-300 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  what we do
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-300 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  our projects
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-300 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  our services
                </a>
              </li>
              <li className="w-60 h-10 bg-blue-300 mb-2">
                <a className="text-3xl text-gray-50 px-4 hover:text-gray-800">
                  home{' '}
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-blueGray-900">
        <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-200 sm:text-left ">
            © Your Company 2020
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-white hover:text-blue-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-white hover:text-blue-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-white hover:text-blue-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>

    {/* <p> &copy; goziecodes {new Date().getFullYear()} </p> */}
  </div>
);

export default Footer;
