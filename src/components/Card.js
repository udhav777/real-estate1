import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store/realEstateSlice";
import { GrFavorite, MdOutlineFavorite } from "react-icons";
import "./Card.css";

const Card = () => {
  const [favorite, setFavorite] = useState(false);

  const data = useSelector((slice) => slice.realSlices);
  const dispatch = useDispatch();

  console.log(data);
  return (
    <div>
      <div className="cards">
        {data.filterData.length === 0
          ? data.propreties.map((item, index) => {
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
            })
          : data.filterData.map((item, index) => {
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

export default Card;
