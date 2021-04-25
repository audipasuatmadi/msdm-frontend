import Axios from "axios";

export const rolesApi = async (rolesData, kode) => {
  let feedback;
  try {
    feedback = await Axios.post(
      'http://localhost/msdm-backend/roles.php', 
      {
      code: kode,
      ...rolesData
    });
  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}
