import { useState, useEffect } from "react"
import Axios from 'axios';

export const useStakeholdersData = () => {
  const [stakeholdersData, setStakeholdersData] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          'http://localhost/msdm-backend/investors.php',
          {
            params: {
              code: 2
            }
          }
        );
      } catch (e) {
        console.log(e.response);
        setStakeholdersData([]);
      }
      if (!newDatas) return;
      let id = 0;
      newDatas = newDatas.data.map((val) => {
        val['id'] = ++id;
        return val;
      });
      setStakeholdersData(newDatas);
    };
    getDatas();
  }, []);

  return stakeholdersData;
}