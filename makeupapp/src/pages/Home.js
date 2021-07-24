import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ProductSection from '../components/ProductsSection';
import Header from '../components/Header'


const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '100vw',
    minHeight: '100vh',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100vw',
    overflowY: 'scroll',
  },
}));

const Home = () => {
  const classes = useStyles();
    return (
      <div className={classes.home}>
        <Header />
        <Toolbar />
        <div className={classes.homeContainer}>
          <h3>Promoção</h3>
          <ProductSection />
          <h3>Mais Vendidos</h3>
          <ProductSection />
          <h3>Mais Vendidos</h3>
          <ProductSection />
        </div>
        <BottomNavigation />
      </div>
      );
}

export default Home;