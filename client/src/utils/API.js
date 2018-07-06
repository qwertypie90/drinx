import axios from "axios";

export default {
  // Gets all resturants
  getNhResturants: function(resturantData) {
    return axios.get("/api/nhresturants", resturantData);
  },
  // Saves a resturant to the database
  saveNhResturants: function(resturant) {
    return axios.post("/api/nhresturants", resturant);
  }
};
