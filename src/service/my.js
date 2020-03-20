import Axios from "axios";

export const getUserData = () => {
  return Axios.get("https://elm.cangdu.org/v1/user");
};

export const getUserDataGithub = accessToken => {
  return Axios({
    method: "get",
    url: `https://api.github.com/user`,
    headers: {
      accept: "application/json",
      Authorization: `token ${accessToken}`
    }
  });
};
