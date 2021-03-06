import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Text from './Text';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '2vh',
    borderRadius: '30px',
    minHeight: '15vh',
    width: '90%',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
    padding: '0 16px !important',
    height: '100%',
  },
  cover: {
    width: '23vh',
  },
  lastRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  }
}));

const BagItemCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link className={classes.link}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/images/red-lipstick.PNG"
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.firstRow}>
              <Text text="Batom Matte" bold />
              <Link className={classes.link}>
                <Text text="X" bold link='' />
              </Link>
            </div>
            <Text text="COR: VERMELHO" />
            <div className={classes.lastRow}>
              <Text text="QUANTIDADE: 1" />
              <Text text="R$49,99" bold />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>

  );
}

export default BagItemCard;