
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import { NavLink } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   link:{
//     color:"inherit",
//     textDecoration:"none",
//     "&.active > div ":{
//       backgroundColor: theme.palette.action.selected
//     }

//   }
// }));

// function ListItemLink(props:any) {
//   return <ListItem button component="a" {...props} />;
// }

// export default function SideBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="main mailbox folders">
//         <NavLink to="/admin/dashboard" className={classes.link} >

//         <ListItem button >
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         </NavLink>
//         <NavLink to="/admin/todo" className={classes.link}>

//         <ListItem button >
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Todo" />
//         </ListItem>
//         </NavLink>


//       </List>
//       <Divider />

//     </div>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
    link:{
    color:"inherit",
    textDecoration:"none",
    "&.active > div ":{
      backgroundColor: theme.palette.action.selected
    }
  }

}));

export default  function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    
      className={classes.root}
    >
      <NavLink to="/admin/todo" className={classes.link} >

      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Todo" />
      </ListItem>
      </NavLink>

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" >
        <List component="div" disablePadding>

        <NavLink to="/admin/dashboard/post" className={classes.link} >
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Posts" />
            

          </ListItem>
          </NavLink>
          <NavLink to="/admin/dashboard/ranking" className={classes.link} >

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Ranking" />
            
            
          </ListItem>
          </NavLink>
        </List>
      </Collapse>
    </List>
  );
}
