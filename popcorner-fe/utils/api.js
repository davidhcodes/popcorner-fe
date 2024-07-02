import axios from "axios";

const userAPI = axios.create({
  baseURL: "http://popcorner.vercel.app/",
});

export const getUser = (userID) => {
  console.log(userID);
  return userAPI.get(`/users/${userID}`).then(({ data }) => {
    console.log(data);
    return data.user;
  });
};
