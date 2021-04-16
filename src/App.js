import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/styles/makeStyles';
import { useTheme } from '@material-ui/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import Alarm from '@material-ui/icons/Alarm';

const colors = ['primary', 'secondary', 'success', 'warning'];

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    // color: '#fff',
    // '&:hover': {
    //   // backgroundColor: theme.palette.success.dark
    // }
  },
}));

export default function App() {
  const classes = useStyle();
  const theme = useTheme();

  const [nigg, aa] = useState(false)
  const anchorElement = useRef(null);

  return (
    <>
    </>
  );
}
