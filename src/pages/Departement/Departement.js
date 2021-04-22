import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { createMuiTheme, Fab, Grid, TextField, ThemeProvider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDepartmentData } from './Departement.hook';
import { departementColumns } from './Departement.config';
import { useStyles } from './Departement.style';
import { red } from '@material-ui/core/colors';
import Axios from 'axios';
import FormDialog from '../../components/Dialogs/FormDialog';


export default function Departemen() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dialogOpened, setDialogOpened] = useState(false);
  const [editDialogOpened, setEditDialogOpened] = useState(false);
  const [refresh, setRefresh] = useState(1);

  const departemenData = useDepartmentData(refresh);
  const classes = useStyles();

  const [dataId, setDataId] = useState(0);
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleInput = (inputSetter) => (e) => inputSetter(e.target.value);
  const handleNewDepartement = async () => {
    const shippingData = {
      name: nama,
      description: deskripsi,
    };
    let feedback;
    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/departments.php',
        {
          code :1,
          ...shippingData,
        }
      );
    } catch (e) {
      console.log(e);
    }
    if (feedback) {
      console.log(feedback);
      setRefresh(refresh+1);
    }
  };
  
  const handleEditDepartement = async () => {
    const shippingData = {
      id : dataId,
      nama : nama,
      description : deskripsi,
    };
    let feedback;
    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/departments.php',
        {
          code: 2,
          ...shippingData,
        }
      );
    } catch (e) {
      console.log(e);
    }
    if (feedback) {
      console.log(feedback);
      setRefresh(refresh+1);
    }
  };

  const handleDelete = async (selectedData) => {
    setData(departemenData.filter((useDepartmentData) => useDepartmentData.id !== parseInt(selectedData[0])));
    setSelected([]);

    const shippingData = {
      id: parseInt(selectedData[0]),
    };
    console.log(shippingData);

    let feedback;

    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/departments.php',
        {
          code: 3,
          ...shippingData,
        }
      );
    } catch (e) {
      console.log(e);
    }
    if (feedback) {
      console.log(feedback);
      setRefresh(refresh+1);
    }
  };

  return (
    <section style={{ height:'75vh', position:'relative'}}>
      <div 
        style={{ 
          height: 400,
          boxShadow:
            '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
          position: 'relative',
        }}
      >
        <DataGrid 
          rows={departemenData} 
          columns={departementColumns} 
          pageSize={5} 
          disableMultipleSelection
          className = {classes.datagrid}
          onSelectionModelChange={(data) => setSelected(data.selectionModel)}
          hideFooterSelectedRowCount
        />
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          bottom: 0,
          right: 0,
        }}
      >
        {selected.length === 1 &&(
          <>
            <ThemeProvider
              theme={createMuiTheme({ palette: { primary: red }})}
            >
              <Fab color='primary' onClick={() => handleDelete(selected)}>
                <DeleteIcon />
              </Fab>
            </ThemeProvider>
            <Fab
              onClick={() => {
                const selectedData = departemenData.filter(
                  (departemenData) => departemenData.id === parseInt(selected[0])
                )[0];
                setDataId(selectedData.id);
                setNama(selectedData.nama);
                setDeskripsi(selectedData.deskripsi);
                setEditDialogOpened(true);
              }}
            >
              <EditIcon />
            </Fab>
          </>
        )}
        <Fab
          className={classes.myfab}
          color='primary'
          onClick={() => setDialogOpened(true)}
        >
          {' '}
          <AddIcon style={{ color:'#fff'}} />
        </Fab>
        <FormDialog
          open={dialogOpened || editDialogOpened}
          handleClose={() => {
            setDialogOpened(false);
            setEditDialogOpened(false);
          }}
          title="Tambahkan Departemen Baru"
          text="Tambahkan Departemen yang baru dengan cara mengisi form dibawah."
          onTrueClick={() => {
            if (dialogOpened) handleNewDepartement(refresh);
            if (editDialogOpened) handleEditDepartement();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Nama Departement"
                required
                fullWidth
                variant="filled"
                value={nama}
                onChange={handleInput(setNama)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField 
                label="Deskripsi Departement"
                required
                fullWidth
                variant="filled"
                value={deskripsi}
                onChange={handleInput(setDeskripsi)}
              />
            </Grid>
          </Grid>
        </FormDialog>
      </div>
    </section>
  );
}
