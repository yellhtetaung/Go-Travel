import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      {
        params: {
          bl_latitude: "25.15543993776612",
          tr_latitude: "25.41257834546226",
          bl_longitude: "51.39587210719369",
          tr_longitude: "51.62812119686502",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "6ff155c908msh4e71fb8b64a736ap1a37bajsn2c368becfb29",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
