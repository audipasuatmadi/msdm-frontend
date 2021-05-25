import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import makeStyles from '@material-ui/styles/makeStyles';
import ProfileCard from '../../components/Cards/ProfileCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  tagContainer: {
    display: 'flex',
    gap: '0.5em',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item container>
          <Grid xs item>
            <Card>
              <CardHeader
                title='Jumlah Anggota: V'
                subheader='Kelas E, Matakuliah Praktikum Basis Data 2021'
              />
            </Card>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid xs item>
            <ProfileCard
              imageName='odi.jpg'
              name='Putu Audi Pasuatmadi'
              subtitle='SIC, DSC Udayana, Inspix Technologies'
              roles={[
                'Backend Developer',
                'Frontend Developer',
                'DevOps Engineer',
                'System Analyst',
                'Database Engineer',
                'Software Tester',
              ]}
            />
          </Grid>
          <Grid xs item>
            <ProfileCard
              imageName='dekbom.jpg'
              name='I Kadek Krisna Dwi Payana'
              subtitle='SIC'
              roles={[
                'Frontend Developer',
                'Backend Developer',
                'Version Control Manager',
                'Designer',
                'Database Engineer',
              ]}
            />
          </Grid>
          <Grid xs item>
            <ProfileCard
              imageName='degung.jpg'
              name='Gde Agung Mandala Bendesa'
              subtitle='SIC'
              roles={[
                'Frontend Developer',
                'Designer',
                'Database Engineer',
                'Idea Thinker',
                'Software Quality Assurance',
              ]}
            />
          </Grid>
          <Grid xs item>
            <ProfileCard
              imageName='abhira.PNG'
              name='I Gusti Agung Gde Abhirama Adnyana'
              subtitle='BPM FMIPA'
              roles={[
                'Frontend Developer',
                'Designer',
                'Database Engineer',
                'Idea Thinker',
                'Project Manager',
              ]}
            />
          </Grid>
          <Grid xs item>
            <ProfileCard
              imageName='agus.jpg'
              name='I Ketut Agus Pranata Muliawan'
              subtitle='SIC'
              roles={[
                'Frontend Developer',
                'Designer',
                'Database Engineer',
                'Idea Thinker',
                'Report Maker',
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
