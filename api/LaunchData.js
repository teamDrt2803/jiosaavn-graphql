import { Axios } from "../api/index.js";

const fetchLaunchData = async (props) => {
  const res = await Axios.get(
    "/api.php?__call=webapi.getLaunchData&api_version=4&_format=json&_marker=0&ctx=wap6dot0"
  );
  return res.data;
};

export default fetchLaunchData;
