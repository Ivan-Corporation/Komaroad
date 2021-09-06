import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';

import Math from './Cards/Math';


import { BrowserRouter as Router,

  Switch,
  Route,

} from "react-router-dom";


export default function Main() {


  return (
    <React.Fragment>

      <CssBaseline />
      
      <Header/>

      <Switch>
          <Route exact path="/math" component={Math}/>

          <Route path="/users" />

          <Route exact path="/" component={MainContent}/>
        </Switch>
      
      <Footer/>



    </React.Fragment>

    
  );
}