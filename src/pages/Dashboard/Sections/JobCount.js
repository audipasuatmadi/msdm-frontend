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
  const [inputMinJob, setInputMinJob] = useState(0);

  const jobCounts = useJobCountData(minJob);

  return (
    <>
      <Grid item xs={9}>
        <Card elevation={1}>
          <CardHeader
            title='Jumlah Karyawan per Jabatan'
            subheader='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic placeat, architecto rerum porro qui exercitationem labore a, deleniti perferendis vero consectetur fugit officiis voluptatum omnis in. Distinctio, debitis quas?'
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
            <Button
              color='primary'
              onClick={() => {
                setMinJob(inputMinJob);
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
