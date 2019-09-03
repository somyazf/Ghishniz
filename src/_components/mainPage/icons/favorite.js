import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function FavoriteFood() {
    return(
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
    )
}