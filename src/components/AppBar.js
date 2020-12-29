import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import data from '../data';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
	},
	offset: theme.mixins.toolbar,
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Button color="inherit" component={Link} to="/">
						<Typography variant="h6" className={classes.title}>
							{data.websiteName}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
