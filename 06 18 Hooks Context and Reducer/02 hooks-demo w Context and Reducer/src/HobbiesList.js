import React, { Fragment, useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';
import FlightIcon from '@material-ui/icons/Flight';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import RestoreFromTrashTwoToneIcon from '@material-ui/icons/RestoreFromTrashTwoTone';
import IconButton from '@material-ui/core/IconButton';
import { HobbyContext } from './Contexts/HobbyContext';
import { REMOVE_HOOBY } from './Reducers/HobbyReducer';

export default function HobbiesList() {
  const { hobbies, dispatch } = useContext(HobbyContext);

  let listOutput = <div style={{ color: 'purple' }} >nothing to show yet...</div>;
  if (hobbies.length > 0) {
    listOutput = (
      hobbies.map((hob, index) => {
        return (
          <ListItem key={index} style={{ height: 80, paddingBottom: 30 }} button>
            <ListItemIcon>
              <Fragment>
                {hob.icon === 'Flight' && <FlightIcon />}
                {hob.icon === 'Sport' && <SportsTennisIcon />}
                {hob.icon === 'Music' && <MusicNoteIcon />}
                {hob.icon === 'Another' && <LabelImportantTwoToneIcon />}
              </Fragment>
            </ListItemIcon>
            <ListItemText primary={hob.name} secondary={hob.times + " times a week"} />
            <IconButton color="secondary" aria-label="delete" onClick={() => { dispatch({ type: REMOVE_HOOBY, id: hob.id}) }}>
              <RestoreFromTrashTwoToneIcon />
            </IconButton>
          </ListItem>)
      })
    );
  }
  return (
    <div className="smallDiv">
      <center>
        Hobbies List
            <List style={{
          width: '100%', maxWidth: 360, marginLeft: 50, marginRight: 50,
          border: 'solid black 2px'
        }} component="nav" aria-label="main mailbox folders">
          {listOutput}
        </List>
      </center>
    </div>
  )
}
