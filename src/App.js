import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {
  Link as RouterLink,
  Switch as RouterSwitch,
  Route as RouterRoute,
} from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import routes from './routes';

import { drawerTheme, useStyles } from './App.styles';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('Dashbor');

  const classes = useStyles({
    isDrawerOpen: drawerOpen,
  });

  return (
    <>
      <CssBaseline>
        <AppBar position='static' color='default' className={classes.root}>
          <Toolbar>
            <IconButton
              className={classes.toggleButton}
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            {drawerOpen ? (
              <Hidden xsDown>
                <Typography variant='h6'>{currentRoute}</Typography>
              </Hidden>
            ) : (
              <Typography variant='h6'>{currentRoute}</Typography>
            )}
          </Toolbar>
        </AppBar>
      </CssBaseline>
      <ThemeProvider theme={drawerTheme}>
        <Drawer
          variant='persistent'
          anchor='left'
          className={classes.drawer}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <h1 style={{ textAlign: 'center' }}>MSDM</h1>
          <List className={classes.drawerItems}>
            {routes.map(({ name, icon: Icon, divider, route }, key) => (
              <React.Fragment key={key}>
                {divider && <Divider />}
                <ListItem
                  button
                  component={RouterLink}
                  onClick={() => {
                    setCurrentRoute(name);
                  }}
                  to={route}
                  selected={currentRoute === name}
                >
                  <ListItemText>{name}</ListItemText>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                </ListItem>
              </React.Fragment>
            ))}
            <ListItem></ListItem>
          </List>
        </Drawer>
      </ThemeProvider>

      <Grid style={{ marginTop: '5rem' }} container justify='center'>
        <Grid item xs={0} sm={drawerOpen ? 2 : 0} />
        <Grid item xs={12} sm={10} md={8}>
          <RouterSwitch>
            {routes.map(({ route, component }, key) => (
              <RouterRoute key={key} path={route} exact component={component} />
            ))}
          </RouterSwitch>
        </Grid>
      </Grid>
    </>
  );
}
