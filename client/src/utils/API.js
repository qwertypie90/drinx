import axios from "axios";

export default {
  // Gets all resturants
  Resturants: function(resturantData) {
    return axios.get("/api/nhresturants", resturantData);
  },
  // Get specific resturants 
  getSpecificResturants: function(day) {
    return axios.get("/api/nhresturants/" + day);
  },
  // Saves a resturant to the database
  saveNhResturants: function(resturant) {
    return axios.post("/api/nhresturants", resturant);
  }
};
