import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { DataGrid } from '@material-ui/data-grid';
import { dataColumns } from './Stakeholders.config';
import { useStakeholdersData } from './Stakeholders.hook';

export default function Stakeholders() {

  const stakeholdersData = useStakeholdersData();

  return (
    <section
      style={{ height: '105vh', position: 'relative', marginBottom: '5rem' }}
    >
      <Card>
        <CardHeader
          title='Stakeholder'
          subheader='Tabel dan data - data Stakeholder'
        />
        <CardContent>
          <DataGrid
            columns={dataColumns}
            rows={stakeholdersData}
            pageSize={5}
            autoHeight
            disableSelectionOnClick
            hideFooterSelectedRowCount
          />
        </CardContent>
      </Card>
    </section>
  );
}
