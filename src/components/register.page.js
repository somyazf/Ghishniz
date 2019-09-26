import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link,withRouter } from "react-router-dom";
import { AUTHHOST } from '_constants/other.constants';
import Axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    textField: {
        width: '100%'
    },
    formWrap: {
        width: 570,
        margin: '60px auto',
        verticalAlign: 'middle',
        lineHeight: '6rem',
    },
    logoMargin: {
        marginBottom: 45,
    },
    textFieldFont: {
        fontSize: 21,
    },
    button: {
        borderRadius: 20,
        padding: '8px 20px',
    },
    loginBtn: {
        background: 'linear-gradient(to right, #F37335, #FDC830)',
        marginRight: '15px',
        padding: '8px 20px',
        borderRadius: 20,
        color: 'white',
    }
}));

const RegisterPage = (props) => {

    const [values,setValues] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [responseMessage,setResponseMessage] = useState(null);

    const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const submitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await Axios({
                method: 'post',
                url: `${AUTHHOST}/users/register`,
                headers: {
                  'Content-Type': 'application/json',
                },
                data: values
            });
            if (response.status === 200){
                setResponseMessage("Your user successfully registered");
                props.history.push('/login');
            }
        } catch (error){
            setResponseMessage(error.response.data.message);
        }
    }

    const handleClose = () =>{
        setResponseMessage(null);
    }

    return <>
        <Grid container className="loReBg">
            <Grid lg={6}>
                <Grid className={classes.formWrap}>
                    <form onSubmit={submitHandler}>
                        <Typography variant="h3" component="h1" color="textSecondary" gutterBottom >
                            Register
                        </Typography>
                        <TextField
                            id="name"
                            label="Full Name"
                            name="name"
                            className={classes.textField}
                            value={values.name}
                            onChange={handleChange}
                            margin="normal"
                            required
                        />
                        <TextField
                            id="email"
                            label="Email"
                            name="email"
                            className={classes.textField}
                            value={values.email}
                            onChange={handleChange}
                            margin="normal"
                            type="email"
                            required
                        />
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            className={classes.textField}
                            value={values.password}
                            onChange={handleChange}
                            margin="normal"
                            type="password"
                            required
                        />
                        <Button type="submit" size="small" variant="contained"  className={classes.loginBtn}>Register</Button>
                        <Button type="button" component={Link} to="/login" variant="outlined" size="small" className={classes.button}>Login</Button>
                    </form>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={!!responseMessage}
                        autoHideDuration={6000}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{responseMessage}</span>}
                        action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                            className={classes.close}
                        >
                            <CloseIcon />
                        </IconButton>,
                        ]}
                    />
                </Grid>
            </Grid>
        </Grid>
    </>
}

withRouter(RegisterPage);
export {RegisterPage};