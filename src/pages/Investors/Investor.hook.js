import {useState, useEffect} from 'react'
import Axios from 'axios';

export const useInvestorData = (refresh) => {
  const [investorData, setInvestorData] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          'http://localhost/msdm-backend/investors.php',
          {
            params: {
              code: 1
            }
          }
        );
      } catch (e) {
        console.log(e.response);
        setInvestorData([]);
      }
      if (!newDatas) return;
        setInvestorData(newDatas.data);
    };
    getDatas();
  }, [refresh]);

  return investorData;
}