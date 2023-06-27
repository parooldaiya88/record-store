import axios from "axios";
const getAllRecords = async (dispatchRecords) => {
  const response = await axios.get("data.json");
  // setRecords(response.data);
  dispatchRecords({ type: "FETCH_RECORDS_SUCCESS", payload: response.data });
};

export default getAllRecords;
