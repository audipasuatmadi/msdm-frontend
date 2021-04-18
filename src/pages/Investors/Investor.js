import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { DataGrid } from '@material-ui/data-grid';
import { dataColumns } from './Investor.config'
import { useInvestorData } from './Investor.hook';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'

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
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          bottom: '5rem',
          right: '5rem',
        }}
      >
        {
          selectedInvestor !== -1 && (
          <>
            <ThemeProvider
              theme={createMuiTheme({ palette: { primary: red } })}
            >
              <Fab color='primary'>
                <DeleteIcon />
              </Fab>
            </ThemeProvider>
            <Fab>
              <EditIcon />
            </Fab>
          </>
          )
        }
        <Fab
          color='primary'
        >
          <AddIcon style={{color: '#fff'}} />
        </Fab>
      </div>
    </section>
  )
}
