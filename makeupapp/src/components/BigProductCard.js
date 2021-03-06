import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '15vh',
    width: '90vw',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '30px',
    backgroundImage: props => props.path,
    backgroundSize: 'cover',
  }
}));

const BigProductCard = ({path}) => {
  const classes = useStyles({path});
  return (
    <div className={classes.card} />
  )
}

export default BigProductCard;