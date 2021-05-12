// import { } from 'react'
import Axios from 'axios';

export const addNewInvestor = async (investorData) => {
  let feedback;
  try {
    feedback = await Axios.post('http://localhost/msdm-backend/investors.php', {
      code: 1,
      ...investorData
    });

  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}
export const editInvestor = async (investorData) => {
  let feedback;
  try {
    feedback = await Axios.post('http://localhost/msdm-backend/investors.php', {
      code: 2,
      ...investorData
    });

  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}

export const deleteInvestor = async (investorId) => {
  let feedback;
  try {
    feedback = await Axios.post('http://localhost/msdm-backend/investors.php', {
      code: 3,
      id: investorId
    });

  } catch (e) {
    console.log(e.response);
  }
  if (feedback);
  console.log(feedback);
}