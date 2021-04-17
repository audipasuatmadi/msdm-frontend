import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import { useDepartmentData } from './Departement.hook';
import { departementColumns } from './Department.config'

export default function Departemen() {
  const departemenData = useDepartmentData();

  return (
    <div style={{ 
      height: 400,
      boxShadow:
        '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
      position: 'relative',
      }}>
      <DataGrid 
      rows={departemenData} 
      columns={departementColumns} 
      pageSize={5} 
      disableMultipleSelection
      />
    </div>
  );
}
