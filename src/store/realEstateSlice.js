import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Data";

const initialState = {
  propreties: data,
  faourite: [],
  filterData: [],
};

const realSlices = createSlice({
  name: "realestate",
  initialState,
  reducers: {
    add: (state, action) => {
      state.faourite.push(action.payload);
    },
    removed: (state, action) => {
      state.faourite = state.faourite.filter(
        (item) => item.id !== action.payload.id
      );
    },
    applyFilter: (state, action) => {
      if (action.payload.location) {
        state.filterData = state.propreties.filter(
          (item) => item.address === action.payload.location
        );
      }
      if (action.payload.propertype) {
        state.filterData = state.filterData.filter(
          (item) => item.type === action.payload.propertype
        );
      }

      if (action.payload.price) {
        let priceRange = action.payload.price;

        switch (priceRange) {
          case "0-3000":
            state.filterData = state.filterData.filter((property) => {
              if (parseInt(property.price) <= 3000) return true;
            });
            break;
          case "3000-6000":
            state.filterData = state.filterData.filter((property) => {
              if (
                parseInt(property.price) >= 3000 &&
                parseInt(property.price) <= 6000
              )
                return true;
            });
            break;
          case "6000-10000":
            state.filterData = state.filterData.filter((property) => {
              if (parseInt(property.price) >= 6000) return true;
            });
            break;
        }
      }
    },
  },
});

export const { add, removed, applyFilter } = realSlices.actions;
export default realSlices.reducer;
