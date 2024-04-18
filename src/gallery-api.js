import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "rBCsC-fJjRfqVZySZ3J3YLmA7m9I9IPv0mcMXek3qBU";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page: currentPage,
      per_page: 15,

      orientation: "landscape",
    },
  });

  return response.data;
};
