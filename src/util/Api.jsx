import axios from "axios";

// "X-RapidAPI-Key": "c8210eaa4dmsh2dc49e6e8553b3ap1529acjsnbee4adc1afb7",//majid
// "X-RapidAPI-Key": "6e76a46837msh4a3e46801cad5f1p1f11d9jsn20287a595f2a",//saif

const base_url = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "72a269ad29mshf75a0a66710abcbp1f4dc2jsn8f45d8570d1d", //mahi
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const FetchApiData = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it further upstream if needed
  }
};
