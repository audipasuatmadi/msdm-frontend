import React, { useState } from 'react';
import Axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from './Employees.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { red } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { useDepartmentData, useRolesData, useEmployeesData } from './Employees.hook';
import FormDialog from '../../components/Dialogs/FormDialog';
import { dataColumns } from './Employees.config';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';

export default function Employees() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dialogOpened, setDialogOpened] = useState(false);
  const [editDialogOpened, setEditDialogOpened] = useState(false);
  const [refresh, setRefresh] = useState(1);

  const [searchType, setSearchType] = useState('name');
  const [searchedName, setSearchedName] = useState('');
  const [searchConfig, setSearchConfig] = useState({ params: { code: 2 } });

  const employeeData = useEmployeesData(refresh, searchConfig);

  const classes = useStyles();

  const roleData = useRolesData();
  const departmentData = useDepartmentData();

  const [selectedRole, setSelectedRole] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  const [dataId, setDataId] = useState(0);
  const [nama, setNama] = useState('');
  const [gaji, setGaji] = useState(1);
  const [jamKerja, setJamKerja] = useState(1);

  const handleInput = (inputSetter) => (e) => inputSetter(e.target.value);
  const handleNewEmployee = async () => {
    const shippingData = {
      name: nama,
      roleId: selectedRole,
      workHours: jamKerja,
      salary: gaji,
      departmentId: selectedDepartment,
    };
    let feedback;
    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/employees.php',
        {
          code: 1,
          ...shippingData,
        }
      );
    } catch (e) {
      console.log(e);
    }
    if (feedback) {
      console.log(feedback);
      setRefresh(refresh + 1);
    }
  };

  const handleEditEmployee = async () => {
    const shippingData = {
      id: dataId,
      name: nama,
      roleId: selectedRole,
      workHours: jamKerja,
      salary: gaji,
      departmentId: selectedDepartment,
    };
    let feedback;
    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/employees.php',
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
      setRefresh(refresh + 1);
    }
  };


  const handleDelete = async (selectedData) => {
    setData(data.filter((data) => data.id !== parseInt(selectedData[0])));
    setSelected([]);

    const shippingData = {
      id: parseInt(selectedData[0]),
    };

    let feedback;

    try {
      feedback = await Axios.post(
        'http://localhost/msdm-backend/employees.php',
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
      setRefresh(refresh + 1);
    }
  };

  const handleSearch = () => {
    if (searchType === 'name') {
      if (searchedName === '') {
        setSearchConfig({ params: { code: 2 } });
        return;
      }
      setSearchConfig({ params: { code: 3, name: searchedName } });

    } else {

    }
  }

  return (
    <section style={{ height: '105vh', position: 'relative', marginBottom: '5rem'}}>
      <Card>
        <CardHeader 
          title="Pencarian"
          subheader="Cari karyawan berdasarkan..."
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <ButtonGroup>
                <Button onClick={()=>setSearchType('name')}>Nama</Button>
                <Button onClick={()=>setSearchType('role')}>Jabatan</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid style={{marginTop: '1rem'}} container>
            <Grid item xs={12}>
              {
                searchType === 'name' && (
                  <TextField
                    fullWidth
                    variant="filled"
                    label="nama karyawan"
                    value={searchedName}
                    onChange={handleInput(setSearchedName)}
                  >

                  </TextField>
                )
              }
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button 
            color="primary"
            variant="contained"
            onClick={handleSearch}
          >
            Cari
          </Button>
        </CardActions>
      </Card>
      <div
        style={{
          height: 400,
          marginTop: 10,
          boxShadow:
            '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
          position: 'relative',
        }}
      >
        <DataGrid
          columns={dataColumns}
          rows={employeeData}
          pageSize={5}
          className={classes.datagrid}
          disableMultipleSelection
          onSelectionModelChange={(data) => setSelected(data.selectionModel)}
          hideFooterSelectedRowCount
        />
      </div>
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
        {selected.length === 1 && (
          <>
            <ThemeProvider
              theme={createMuiTheme({ palette: { primary: red } })}
            >
              <Fab color='primary' onClick={() => handleDelete(selected)}>
                <DeleteIcon />
              </Fab>
            </ThemeProvider>
            <Fab
              onClick={() => {
                const selectedData = data.filter(
                  (data) => data.id === parseInt(selected[0])
                )[0];
                setDataId(selectedData.id);
                setNama(selectedData.nama);
                setGaji(selectedData.gaji);
                setJamKerja(selectedData.jam_kerja);

                setSelectedRole(0);
                setSelectedDepartment(0);

                if (selectedData.jabatan_id)
                  setSelectedRole(selectedData.jabatan_id);
                if (selectedData.departemen_id)
                  setSelectedDepartment(selectedData.departemen_id);
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
          <AddIcon style={{ color: '#fff' }} />{' '}
        </Fab>
        <FormDialog
          open={dialogOpened || editDialogOpened}
          handleClose={() => {
            setDialogOpened(false);
            setEditDialogOpened(false);
          }}
          title='Daftarkan Karyawan'
          text='Daftarkan karyawan anda dengan cara mengisi form dibawah. Pastikan seluruh form terisi.'
          onTrueClick={() => {
            if (dialogOpened) handleNewEmployee();
            if (editDialogOpened) handleEditEmployee();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Nama'
                required
                fullWidth
                variant='filled'
                value={nama}
                onChange={handleInput(setNama)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label='Jam Kerja'
                required
                variant='filled'
                type='number'
                fullWidth
                value={jamKerja}
                onChange={handleInput(setJamKerja)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Gaji'
                required
                variant='filled'
                type='number'
                fullWidth
                value={gaji}
                onChange={handleInput(setGaji)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                value={selectedRole}
                variant='filled'
                label='jabatan'
                fullWidth
                required
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <MenuItem value={0}>
                  <em>Jabatan</em>
                </MenuItem>
                {roleData.map((data, key) => (
                  <MenuItem key={key} value={data.id}>
                    {data.nama}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                value={selectedDepartment}
                variant='filled'
                label='departemen'
                fullWidth
                required
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <MenuItem value={0}>
                  <em>Departemen</em>
                </MenuItem>
                {departmentData.map((val, key) => (
                  <MenuItem key={key} value={val.id}>
                    {val.nama}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </FormDialog>
      </div>
    </section>
  );
}
