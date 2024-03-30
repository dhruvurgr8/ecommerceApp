import axios from "axios";

async function fetchResults(dispatch) {
  try {
    const response = await axios({
      url: "https://fakestoreapi.com/products",
    });
    dispatch({ type: "FETCH_DATA", payload: response.data });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchResults;
