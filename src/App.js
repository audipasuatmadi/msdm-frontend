import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link as RouterLink } from 'react-router-dom';

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
            {
              drawerOpen?
                <Hidden mdDown><Typography variant='h6'>{currentRoute}</Typography></Hidden>
              :
                <Typography variant='h6'>{currentRoute}</Typography>
            }
            
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
              <>
                {divider && <Divider />}
                <ListItem
                  button
                  key={key}
                  component={RouterLink}
                  onClick={() => {
                    setCurrentRoute(name);
                  }}
                  to={route}
                >
                  <ListItemText>{name}</ListItemText>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                </ListItem>
              </>
            ))}
            <ListItem></ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
