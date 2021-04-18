import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { DataGrid } from '@material-ui/data-grid';
import { dataColumns } from './Investor.config'
import { useInvestorData } from './Investor.hook';

export default function Investor() {

  const [selectedInvestor, setSelectedInvestor] = useState(-1);

  const investorData = useInvestorData();

  return (
    <section
      style={{ height: '105vh', position: 'relative', marginBottom: '5rem' }}
    >
      <Card>
        <CardHeader 
          title="Investor"
          subheader="Tabel dan data - data investor"
        />
        <CardContent>
          <DataGrid 
            columns={dataColumns}
            rows={investorData}
            pageSize={5}
            disableMultipleSelection
            autoHeight
            onSelectionModelChange={(data) => setSelectedInvestor(parseInt(data.selectionModel[0]))}
            hideFooterSelectedRowCount
          />
        </CardContent>
      </Card>
    </section>
  )
}
