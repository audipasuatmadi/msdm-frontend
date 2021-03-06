import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import { useJobCountData } from '../Dashboard.api';

export default function JobCount() {
  const [minJob, setMinJob] = useState(0);
  const [maxJob, setMaxJob] = useState(100);
  const [inputMinJob, setInputMinJob] = useState(0);
  const [inputMaxJob, setInputMaxJob] = useState(100);

  const jobCounts = useJobCountData(minJob, maxJob);

  return (
    <>
      <Grid item xs={9}>
        <Card elevation={1}>
          <CardHeader
            title='Jumlah Karyawan per Jabatan'
            titleTypographyProps={{ variant: 'h6', component: 'h1' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
          />
          <CardContent>
            <BarChart width={730} height={350} data={jobCounts}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='nama_jabatan' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='jml_karyawan' fill='#8884d8' />
            </BarChart>
          </CardContent>

          <CardActions>
            <Button color='primary'>Refresh</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs>
        <Card elevation={1}>
          <CardHeader
            title='Konfigurasi'
            subheader='Yuk diatur'
            titleTypographyProps={{ variant: 'h6', component: 'h1' }}
            subheaderTypographyProps={{ variant: 'subtitle2' }}
          />
          <CardActions>
            <TextField
              label='minimum'
              type='number'
              color='primary'
              size='small'
              variant='filled'
              value={inputMinJob}
              onChange={(e) => setInputMinJob(e.target.value)}
            />
            <TextField
              label='maximum'
              type='number'
              color='primary'
              size='small'
              variant='filled'
              value={inputMaxJob}
              onChange={(e) => setInputMaxJob(e.target.value)}
            />
            <Button
              color='primary'
              onClick={() => {
                setMinJob(inputMinJob);
                setMaxJob(inputMaxJob);
              }}
            >
              Atur
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
