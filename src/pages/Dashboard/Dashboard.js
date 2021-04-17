import React from 'react';
import Grid from '@material-ui/core/Grid';
import JobCount from './Sections/JobCount';

export default function Dashboard() {
  return (
    <section>
      <Grid container spacing={2}>
        <JobCount />
      </Grid>
    </section>
  );
}
