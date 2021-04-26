import Axios from "axios";

export const addNewRoles = async (rolesData) => {
  let feedback;
  try {
    feedback = await Axios.post(
      'http://localhost/msdm-backend/roles.php', {
      code: 1,
      ...rolesData
    });
  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}

export const editRoles = async (rolesData) => {
  let feedback;
  try {
    feedback = await Axios.post('http://localhost/msdm-backend/roles.php', {
      code: 2,
      ...rolesData
    });
  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}

export const deleteRoles = async (rolesId) => {
  let feedback;
  try {
    feedback = await Axios.post('http://localhost/msdm-backend/roles.php', {
      code: 3,
      id: rolesId
    });
  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}
