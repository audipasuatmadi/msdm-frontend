import { useEffect, useState } from 'react';
import Axios from 'axios';

export const useEmployeesData = (refresh) => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    console.log('go');
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get(
          'http://localhost/msdm-backend/employees.php',
          { params: { code: 2 } }
        );
      } catch (e) {
        console.log(e);
      }
      if (!newDatas) return;
      setEmployeeData(newDatas.data.payload);
    };
    getDatas();
    console.log('fetching')
  }, [refresh]);

  return employeeData;
}

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
      if (!newDatas) return;
      setDepartmentData(newDatas.data.payload);
    };
    getDatas();
  }, []);

  return departmentData;
};

export const useRolesData = () => {
  const [roleData, setRoleData] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      let newDatas;
      try {
        newDatas = await Axios.get('http://localhost/msdm-backend/roles.php', {
          params: { code: 1 },
        });
      } catch (e) {
        console.log(e);
      }
      if (!newDatas) return;
      setRoleData(newDatas.data.payload);
    };
    getDatas();
  }, []);

  return roleData;
};
