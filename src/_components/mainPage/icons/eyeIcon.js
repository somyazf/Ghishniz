import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from '@material-ui/lab/ToggleButton';


// const useStyles = makeStyles(theme => ({ 
//     root: {
//       color: theme.palette.text.primary,
//     },
//     icon: {
//       fontSize: 24,
//     },
// }));
// export default function EyeIcon() {
//     const classes = useStyles();
//     return (
//         <IconButton>
//             <VisibilityIcon className={classes.icon} />
//         </IconButton>
//     )
// }


const useStyles = makeStyles(theme => ({
  padding:{
    justifyContent:'space-around'
  },
})
)


export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const classes = useStyles();
  return (
      
    <ToggleButton
      value="!check"
      selected={!selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <VisibilityIcon className={classes.padding} />
    </ToggleButton>
  );
}