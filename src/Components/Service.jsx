import React, { useEffect } from "react";
import { useState } from "react";
import SingleService from "./SingleService";
import circle from '../../public/circle.svg'

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10  my-20">
      {service.map((s, i) => (
        <div className="">
          <SingleService key={i} service={s} />
        </div>
      ))}
     
    </div>
  );
};

export default Service;
