import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({ 
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      fontSize: 24,
    },
}));
export default function EyeIcon() {
    const classes = useStyles();
    return (
        <IconButton>
            <VisibilityIcon className={classes.icon} />
        </IconButton>
    )
}