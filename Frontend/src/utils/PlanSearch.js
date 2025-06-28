// services/planService.js
import axios from "axios";

export const planSearch = async (academyId) => {
  const res = await axios.post("http://localhost:3000/plan/list", {
    academyId,
  });
  return res.data;
};
