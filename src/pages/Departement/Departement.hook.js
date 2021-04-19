import { useEffect, useState } from 'react';
import Axios from 'axios';

export const useDepartmentData = () => {
  const [departmentData, setDepartmentData] = useState([]);
  useEffect(() => {
    console.log('go');
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          'http://localhost/msdm-backend/departments.php',
          { params: { code: 1 } }
        );
      } catch (e) {
        console.log(e);
      }
      console.log(getDatas);
      if (!newDatas) return;
      setDepartmentData(newDatas.data.payload);
    };
    getDatas();
  }, []);

  return departmentData;
};
