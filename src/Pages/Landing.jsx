import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import Cart from "./Cart";

function Landing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="align-elements">
      <div className="pt-20">
        <Hero />
        <div className="border-b border-base-300 m-5 -ml-0  pb-5">
          <h2 className="text-color-[#394E6A] text-3xl font-medium tracking-wider capitalize">
            Featured Products
          </h2>
        </div>
      </div>
      <div>
        {data.map((data) =>{
          
        })}
      </div>
    </div>
    
  );
}

export default Landing;
