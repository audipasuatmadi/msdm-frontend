import axios from "axios";
import { useEffect, useState } from "react";

export const useRolesData = (refresh) => {
  const [rolesData, setRolesData] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await axios.get(
          'http://localhost/msdm-backend/roles.php',
          {
            params : {
              code: 1
            }
          }
        );
      } catch (e) {
        console.log(e.response);
        setRolesData([]);
      }
      if (!newDatas) return;
        setRolesData(newDatas.data.payload);
    };
    getDatas();
  }, [refresh]);

  return rolesData;
}