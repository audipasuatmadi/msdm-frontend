import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import makeStyles from '@material-ui/styles/makeStyles';

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

export default function ProfileCard({ imageName, roles, name, subtitle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`${process.env.PUBLIC_URL}/assets/${imageName}`}
        title='Profile'
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {subtitle}
          </Typography>
          <div className={classes.tagContainer}>
            {roles.map((val, i) => (
              <Chip label={val} key={i} />
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
