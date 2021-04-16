import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { useStyles } from './Employees.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import { red } from '@material-ui/core/colors';
import { withTheme, ThemeProvider } from '@material-ui/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { useDepartmentData, useRolesData } from './Employees.hook';

const columns = [
  {
    field: 'id',
    headerName: 'Id',
    width: 70,
  },
  {
    field: 'nama',
    headerName: 'Nama',
    // width: 70,
  },
  {
    field: 'jam_kerja',
    headerName: 'Jam Kerja',
    width: 120,
    type: 'number',
  },
  {
    field: 'gaji',
    headerName: 'Gaji',
    // width: 70,
    type: 'number',
  },
  {
    field: 'gaji_bersih',
    headerName: 'Gaji Bersih',
    width: 150,
    type: 'number',
  },
  {
    field: 'jabatan',
    headerName: 'Jabatan',
    width: 150,
    type: 'number',
  },
  {
    field: 'nama_departemen',
    headerName: 'Departemen',
    width: 200,
    type: 'number',
  },
];

const FormDialog = ({open, handleClose, roles, departments}) => {
  const [selectedRole, setSelectedRole] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(0);

  return (
    <Dialog open={open}>
      <DialogTitle>Daftarkan Karyawan Baru</DialogTitle>
      <DialogContent>
        <DialogContentText>Daftarkan karyawan anda dengan mengisikan form dibawah ini</DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Nama"
              required
              fullWidth
              variant="filled"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>    
            <TextField 
              label="Jam Kerja"
              required
              variant="filled"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>    
            <TextField 
              label="Gaji"
              required
              variant="filled"
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>    
            <Select
              value={selectedRole}
              variant="filled"
              label="jabatan"
              fullWidth
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <MenuItem value={0}><em>Jabatan</em></MenuItem>
              {
                roles.map((data, key) => (
                  <MenuItem key={key} value={data.id}>{data.nama}</MenuItem>
                ))
              }
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>    
            <Select
              value={selectedDepartment}
              variant="filled"
              label="departemen"
              fullWidth
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <MenuItem value={0}><em>Departemen</em></MenuItem>
              {
                departments.map((val, key) => (
                  <MenuItem key={key} value={val.id}>{val.nama}</MenuItem>
                ))
              }
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Daftarkan</Button>
        <Button onClick={handleClose} color="default">Batal</Button>
      </DialogActions>
    </Dialog>
  )
}

export default function Employees() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const classes = useStyles();

  const roleData = useRolesData();
  const departmentData = useDepartmentData()


  useEffect(() => {
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
      const sanitizedData = newDatas.data.payload.map((data) => {
        if (data['nama_departemen'] === null) {
          data['nama_departemen'] = '-';
        }
        return data;
      });
      setData(sanitizedData);
    };
    getDatas();
  }, []);

  const handleDelete = (selectedData) => {
    setData(data.filter((data) => data.id != selectedData[0]))
    setSelected([]);
  }

  return (
    <section style={{ height: '75vh', position: 'relative' }}>
      <div
        style={{
          height: 400,
          boxShadow:
            '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
          position: 'relative',
        }}
      >
        <DataGrid
          columns={columns}
          rows={data}
          pageSize={5}
          className={classes.datagrid}
          disableMultipleSelection
          onSelectionModelChange={(data) => setSelected(data.selectionModel)}
          hideFooterSelectedRowCount
        />
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: '1rem',
          bottom: 0,
          right: 0,
        }}
      >
        {selected.length === 1 && (
          <ThemeProvider theme={createMuiTheme({ palette: { primary: red } })}>
            <Fab 
              color='primary'
              onClick={()=>handleDelete(selected)}
              >
              <DeleteIcon />
            </Fab>
          </ThemeProvider>
        )}
        <Fab 
          className={classes.myfab} color='primary'
          onClick={()=>setDialogOpened(true)}
        >
          {' '}
          <AddIcon style={{ color: '#fff' }} />{' '}
        </Fab>
        <FormDialog departments={departmentData} roles={roleData} open={dialogOpened} handleClose={()=>setDialogOpened(false)} />
      </div>
    </section>
  );
}
