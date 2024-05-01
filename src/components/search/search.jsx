import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api';

export default function search({onSearchChange}) {

  const [search,setSearch] = useState(null);

  const loadOptions =async (inputValue)=>{
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };
  

  let handleOnChange = (searchData)=>{
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
    placeholder="Search for city"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
  />
  )
}
