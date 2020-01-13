import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
function App() {
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles();
  return (
    <div className='App'>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField id='outlined-basic' label='Sample size' variant='outlined' />
        <TextField id='outlined-basic' label='Sample mean' variant='outlined' />
        <TextField
          id='outlined-basic'
          label='Standard deviation'
          variant='outlined'
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              onChange={() =>
                disabled === true ? setDisabled(false) : setDisabled(true)
              }
              value='checkedB'
              color='primary'
            />
          }
          label='Perform hypothesis test'
        />
        <TextField
          id='outlined-basic'
          label='Hypothesized mean'
          variant='outlined'
          disabled={disabled}
        />
        <div>
          <Button variant='contained' color='primary'>
            Submit
          </Button>
          <Button variant='contained' color='primary'>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
