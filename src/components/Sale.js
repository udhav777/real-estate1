import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/realEstateSlice";

const Sale = () => {
  const data = useSelector((state) => state.realSlices);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Search Property for Sales</h1>

      <div className="cards">
        {data.propreties
          .filter((item) => item.category == "For Sale")
          .map((item, index) => {
            return (
              <div className="card" key={index}>
                <p>
                  <img src={item.image} />
                </p>
                <h2>${item.price}/month</h2>
                <h2>{item.name}</h2>
                <h3>{item.location}</h3>
                <h2>{item.category}</h2>
                <h2>{item.type}</h2>
                <p
                  className="favorite"
                  onClick={() =>
                    dispatch(
                      add({
                        id: item.id,
                        image: item.image,
                        price: item.price,
                        name: item.name,
                        category: item.category,
                      })
                    )
                  }
                >
                  Add Favorite
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sale;
