import Axios from "axios";

export const getUserData = () => {
  return Axios.get("https://elm.cangdu.org/v1/user");
};
