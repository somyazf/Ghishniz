import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({ 
    root: {
      color: theme.palette.error,
    },
    icon: {
      fontSize: 24,
    },
}));
export default function UserIcon() {
    const classes = useStyles();
    return (
        <PersonIcon>
            <VisibilityIcon className={classes.icon} />
        </PersonIcon>
    )
}