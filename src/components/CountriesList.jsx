import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group ">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              key={country.cca3}
              to={`/${country.cca3}`}
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default CountriesList;
