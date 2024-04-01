import React from "react";

import { locations, streetOptions } from "@/lib/locations";

const Scraper = () => {
  const radioMethods = [
    { id: "violation", title: "Violation" },
    { id: "citation", title: "Citation" },
  ];

  return (
    <>
      <div>
        <div className="space-y-2">
          <label className="text-base font-semibold text-gray-900 dark:text-white">
            Search On
          </label>

          <fieldset className="mt-4">
            <legend className="sr-only">Notification method</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {radioMethods.map((radio) => (
                <div key={radio.id} className="flex items-center">
                  <input
                    id={radio.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={radio.id === "violation"}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor={radio.id}
                    className="ml-3 block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    {radio.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="">
            <div className="flex justify-start  items-center space-x-3 space-y-2 mb-4">
              <div>
                <input
                  id="address"
                  type="checkbox"
                  name="searchByAddress"
                  className="mr-2"
                />
                <label htmlFor="address">By Address</label>
              </div>
              <div>
                <p>House Number</p>
                <input
                  id="houseNumber"
                  type="text"
                  name="houseNumber"
                  className="mr-2 border"
                  // placeholder="House Number"
                />
              </div>
              <div className="space-y-2">
                <p>Direction</p>
                <div>
                  <select
                    name="direction"
                    id="direction"
                    className="mr-2 border"
                  >
                    <option value=" "></option>
                    <option value="N">N</option>
                    <option value="S">S</option>
                    <option value="E">E</option>
                    <option value="W">W</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <p>Street Name</p>
                <input
                  id="streetName"
                  type="text"
                  name="streetName"
                  className="mr-2 border"
                  // placeholder="Street Name"
                />
              </div>
              <div>
                <p>Street Suffix</p>
                <div>
                  <select
                    name="streetType"
                    id="streetType"
                    className="mr-2 border"
                  >
                    <option value=""></option>
                    {streetOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/*  second row  */}
            <div className="flex justify-start items-center space-x-3 space-y-2">
              <div>
                <input
                  id="searchByAddress"
                  type="checkbox"
                  name="searchByAddress"
                  className="mr-2"
                />
                <label htmlFor="searchByAddress">By neighborhood</label>
              </div>
              <div>
                <div>
                  <select
                    name="streetType"
                    id="streetType"
                    className="mr-2 border"
                  >
                    <option value=""></option>
                    {locations.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="mt-6 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Scraper;
