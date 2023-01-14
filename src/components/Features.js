import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removed } from "../store/realEstateSlice";
import "./Features.css";

const Features = () => {
  const data = useSelector((state) => state.realSlices);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cards">
        {data.faourite.map((item) => {
          return (
            <div className="card">
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
                onClick={() => dispatch(removed({ id: item.id }))}
              >
                Remove faourite
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
