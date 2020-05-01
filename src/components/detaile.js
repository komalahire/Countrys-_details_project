import React from "react";

function Detaile(props) {
  const { data } = props;
  //   console.log(props);
  return (
    <div className="container">
      {/* <div className="col-12"> */}
      <div className="row mt-4">
        {data.map((country, index) => (
          <div className="col-4 mt-3" key={index}>
            <div className="card">
              <h3>{country.name}</h3>
              <img src={country.flag} className="card-img-top" alt="flag" />
              <div className="card-body">
                <h5 className="card-title">{country.capital}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Population- {country.population}
                </h6>
                <p className="card-text">
                  Latlng -{country.latlng}
                  
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
export default Detaile;
