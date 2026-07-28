import { useDispatch } from "react-redux";
import api from "./axios";
import { setUserData } from "../redux/userSlice";

const fetchCurrentUser = async (dispatch) => {
  try {
    const { data } = await api.get("/me");
    dispatch(setUserData(data))
    console.log(data);
    return data;
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
    console.log("Full Error:", error);
  }
};

export default fetchCurrentUser;