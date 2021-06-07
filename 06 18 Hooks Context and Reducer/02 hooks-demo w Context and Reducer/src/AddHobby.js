import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { HobbyContext } from './Contexts/HobbyContext';
import { ADD_HOBBY } from './Reducers/HobbyReducer';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function AddHobby() {
  const classes = useStyles();
  const [HobbyName, setHobbyName] = useState('');
  const [Times, setTimes] = useState(0);
  const { dispatch } = useContext(HobbyContext);

  const btnAddHobby = () => {
    dispatch({ type: ADD_HOBBY, hobby: { name: HobbyName, times: Times } });
  }

  return (
    <div>
      <center>
        <form
          style={{
            width: '100%', maxWidth: 700, marginLeft: 50, marginRight: 50,
            border: 'solid black 2px'
          }}
          className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Hobby Name" placeholder="Hobby Name"
            onChange={(e) => { setHobbyName(e.target.value); }} />
          <TextField id="standard-basic" label="#Times a week" placeholder="#Times a week" type="number"
            onChange={(e) => { setTimes(e.target.value); }} />
          <IconButton color="primary" aria-label="add an alarm" onClick={btnAddHobby}>
            <LibraryAddIcon />
          </IconButton>
        </form>
      </center>
    </div>
  )
}
