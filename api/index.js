import axios from "axios";
import LaunchData from "./LaunchData.js";

const Axios = axios.create({
  baseURL: "https://www.jiosaavn.com",
});

export { Axios, LaunchData as fetchLaunchData };
